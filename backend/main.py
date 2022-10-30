#!/usr/bin/env python

import random, json, time, printer
from enum import Enum
from websocket_server import WebsocketServer

def loaditems(path):
    with open(path, "r") as f:
        lines = f.readlines()
        d = []
        for i in range(len(lines)):
            if i % 4 == 0 and i + 3 < len(lines):
                d.append((lines[i].strip(), lines[i+1].strip(), lines[i+2].strip()))
        return d

def loadclasses(path):
    with open(path, "r") as f:
        lines = f.readlines()
        d = []
        for i in range(len(lines)):
            if i % 3 == 0 and i + 2 < len(lines):
                d.append((lines[i].strip(), lines[i+1].strip(), lines[i+2].strip()))
        return d

def load_descriptions_features(path):
    with open(path, "r") as f:
        lines = [l.strip() for l in f.readlines() if len(l.strip()) > 0]
        return lines

class Character:
    def __init__(self):
        self.name = ""
        self.playerclass = ""
        self.inv = []                   # Array of tuples (id, [adj1, adj2, etc.])
        self.vote = None                # ID of a players vote
        self.item_action = (None, None) # Item, action
        self.gold = 0

class State(Enum):
    LOBBY = 1,
    PRESENT_ROOM = 2,
    SUBMIT_ANSWERS = 3,
    VOTING = 4,
    CHOOSE_ITEMS = 5,
    EVENT_PRESENT = 6,
    EVENT_PICK_ITEMS = 7,
    EVENT_RESULT = 8

class Game:
    def __init__(self):
        self.items = loaditems("items.txt")
        self.descriptions = load_descriptions_features("room_descriptions.txt")
        self.features = load_descriptions_features("features.txt")
        self.classes = loadclasses("class.txt")
        self.players = {}
        self.state = State.LOBBY

        self.srv = WebsocketServer(host="127.0.0.1", port=6483) # Change this to actual hostname for Pi
        self.srv.set_fn_new_client(self.new_client)
        self.srv.set_fn_message_received(self.message_received)
        self.srv.set_fn_client_left(self.client_left)

        self.srv.allow_new_connections()
        self.srv.run_forever()

    def new_client(self, client, server):
        print("Hello to new client :D")
        if self.state == State.LOBBY:
            self.players[client['id']] = Character()
            server.send_message(client, json.dumps({
                "status": 1,
                "action": f"join_success"
            }))
        else:
            server.send_message(client, json.dumps({
                "status": 0,
                "action": "join_failure"
            }))

    def change_state(self, state):
        self.state = state
        #match self.state:
        if self.state == State.LOBBY:
            print("Changing to lobby.")
            self.srv.allow_new_connections()
        elif self.state == State.PRESENT_ROOM:
            desc_id = random.randint(0, len(self.descriptions)-1)
            feat_id = random.randint(0, len(self.features)-1)
            self.srv.send_message_to_all(json.dumps({
                'action': 'room_description',
                'description_id': desc_id,
                'feature_id': feat_id,
                'description': self.descriptions[desc_id],
                'feature': self.features[feat_id]
            }))
            print("Moving on")
            self.change_state(State.SUBMIT_ANSWERS)
        elif self.state == State.SUBMIT_ANSWERS:
            print("Telling clients to send their answers") 
            self.answers_submitted = 0
            self.srv.send_message_to_all(json.dumps({
                'action': 'request_answers'
            }))
        elif self.state == State.VOTING:
            self.votes_submitted = 0
            print("Telling clients to send their votes")
            self.srv.send_message_to_all(json.dumps({
                'action': 'request_votes'
            }))
        elif self.state == State.CHOOSE_ITEMS:
            # Pick the starting selection of items
            indexed = [(i, v) for i, v in enumerate(self.items)]
            self.selections = random.sample(indexed, len(self.players)+1)
            #self.selections is like [(3, ("name", "desc", "adj"))]

            # Order the players by how many votes they got, highest first
            votes = {i:0 for i in self.players}
            print(f"votes: {votes}")
            print(f"self.players: {self.players}")
            for voter in self.players:
                votes[self.players[voter].vote] += 1
            self.chooser_queue = sorted(votes.items(), key=lambda x : x[1], reverse=True)

            to_send = self.chooser_queue.pop(0)
            for c in self.srv.clients:
                if c['id'] == to_send[0]:
                    self.srv.send_message(c, json.dumps({
                        'action': 'request_item_choice',
                        'options': [{
                            'id': choice[0],
                            'name': choice[1][0],
                            'description': choice[1][1],
                            'adjectives': []
                        } for choice in self.selections]
                    }))

            # while len(self.chooser_queue) > 0:

            #     for c in self.srv.clients:
            #         if self.voter_queue[] == c.id:
            #             self.srv.send_message(c, json.dumps({
            #                 'action': 'request_item_choice',
            #                 'options': [{
            #                     'id': choice[0],
            #                     'name': choice[1][0],
            #                     'description': choice[1][1],
            #                     'adjectives': []
            #                 } for choice in enumerate(selections)]
            #            }))
        elif self.state == State.EVENT_PRESENT:
            pass
        elif self.state == State.EVENT_PICK_ITEMS:
            pass
        elif self.state == State.EVENT_RESULT:
            pass
        else:
            pass

    def message_received(self, client, server, message):
        msg = json.loads(message)
        print(f"==: {msg}")
        player = self.players[client['id']]
        pname = player.name

        if msg['action'] == 'get_status':
            print(f"{pname} getting status.")
            response = {
                'action': 'status_response',
                'status': 1,
                'player_id': client['id'],
                'items': [
                    self.items[i[0]][0] for i in player.inv
                ]
            }
            self.srv.send_message(client, json.dumps(response))
            return

        #match self.state:
        if self.state == State.LOBBY:
            response = {'status': 0, 'message':''}
            try:
                if msg['action'] == 'configure':
                    print(f"{pname} configuring. name: {msg['options']['name']}. class: {msg['options']['playerclass']}.")
                    player.name = msg['options']['name']
                    if 0 <= msg['options']['playerclass'] < len(self.classes):
                        player.playerclass = self.classes[msg['options']['playerclass']]
                        player.inv.append((msg['options']['playerclass'], [])) # class gets item of ID equal to its class id
                        response['status'] = 1
                        response['action'] = 'configured'
                    else:
                        response['status'] = 0
                        response['action'] = 'invalid_class'

                elif msg['action'] == 'start_game':
                    print(f"Starting game!")
                    response['status'] = 1
                    response['action'] = 'starting_game'
                    self.srv.deny_new_connections()
                    self.change_state(State.PRESENT_ROOM)
            except KeyError:
                response['action'] = 'incorrect_request'
                response['status'] = 0
            self.srv.send_message(client, json.dumps(response))
        elif self.state == State.PRESENT_ROOM:
            pass
        elif self.state == State.SUBMIT_ANSWERS:
            try:
                if msg['action'] == 'send_answer':
                    self.answers_submitted += 1
                    player.item_action = (msg['item_id'], msg['message']) # (item_id, action - the thing they do with it not the action send_message!)
                    if self.answers_submitted >= len(self.players):
                        self.srv.send_message_to_all(json.dumps({
                            'action': 'all_answers',
                            'players': [
                                {
                                    'user': self.players[p].name,
                                    'user_id': p,
                                    'item': self.players[p].item_action[0],
                                    'message': self.players[p].item_action[1],
                                } for p in self.players
                            ]
                        }))
                        self.change_state(State.VOTING)
            except KeyError:
                print("Invalid JSON when submitting answer")
        elif self.state == State.VOTING:
            try:
                if msg['action'] == 'send_vote':
                    self.votes_submitted += 1
                    player.vote = msg['player'] # This is the ID of the player
                    if self.votes_submitted >= len(self.players):
                        self.change_state(State.CHOOSE_ITEMS)
            except KeyError:
                print("Invalid JSON when voting")
        elif self.state == State.CHOOSE_ITEMS:
            try:
                if msg['action'] == 'choose_item':
                    # Remove the selection that the player chose
                    self.selections.remove((msg['choice'], self.items[msg['choice']]))
                    print(f"{pname} has chosen the item {msg['choice']}")

                    # If some plays are still in the choosing queue,
                    if len(self.chooser_queue) > 0:
                        to_send = self.chooser_queue.pop(0)
                        print(f"Now that {pname} has picked, letting {to_send} pick")
                        # Find the client that's at the front of the queue
                        for c in self.srv.clients:
                            if c.id == to_send[0]:
                                self.srv.send_message(c, json.dumps({
                                    'action': 'request_item_choice',
                                    'options': [{
                                        'id': choice[0],
                                        'name': choice[1][0],
                                        'description': choice[1][1],
                                        'adjectives': []
                                    } for choice in self.selections]
                                }))
                    else:
                        print("All players chosen items now :)")
                        self.change_state(State.PRESENT_ROOM)
            except KeyError:
                print("Invalid JSON when choosing item")
        elif self.state == State.EVENT_PRESENT:
            pass
        elif self.state == State.EVENT_PICK_ITEMS:
            pass
        elif self.state == State.EVENT_RESULT:
            pass
        else:
            pass

    def client_left(self, client, server):
        print(f"Client left!")

game = Game()