#!/usr/bin/env python

from websocket_server import WebsocketServer
import random
import csv
from enum import Enum
import json

def loaditems(path):
    with open(path, "r") as f:
        lines = f.readlines()
        d = {}
        for i in range(len(lines)):
            if i % 3 == 0 and i + 2 < len(lines):
                d[lines[i].strip()] = lines[i+1].strip()
        return d

class Character:
    def __init__(self):
        self.name = ""
        self.playerclass = ""
        self.inv = [] # Array of tuples

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
        self.players = {}
        self.state = State.LOBBY

        self.srv = WebsocketServer(host="127.0.0.1", port=6483)
        self.srv.set_fn_new_client(self.new_client)
        self.srv.set_fn_message_received(self.message_received)
        self.srv.set_fn_client_left(self.client_left)

        self.srv.allow_new_connections()
        self.srv.run_forever()

    def new_client(self, client, server):
        if self.state == State.LOBBY:
            self.players[client.id] = Character("", "")
            server.send_message(client, json.dumps({
                "status": 0,
                "message": f"join_success"
            }))
        else:
            server.send_message(client, json.dumps({
                "status": 0,
                "message": "join_failure"
            }))

    def change_state(self, state):
        self.state = state
        match self.state:
            case State.LOBBY:
                print("Changing to lobby.")
                self.srv.allow_new_connections()
            case State.PRESENT_ROOM:
                print("OOOh, you've just entered a scary room. Description here!")
                self.srv.send_message_to_all(json.dumps({
                    'action': 'room_description',
                    'description': 'Spooky scary room description',
                    'feature': 'A unique and fun feature of the room'
                }))
            case State.SUBMIT_ANSWERS:
                print("Telling clients to send their answers")
                self.srv.send_message_to_all(json.dumps({
                    'action': 'request_answers'
                }))
            case State.VOTING:
                print("Telling clients to send their votes")
                self.srv.send_message_to_all(json.dumps({
                    'action': 'request_votes'
                }))
            case State.CHOOSE_ITEMS:
                pass
            case State.EVENT_PRESENT:
                pass
            case State.EVENT_PICK_ITEMS:
                pass
            case State.EVENT_RESULT:
                pass
            case _:
                pass

    def message_received(self, client, server, message):
        msg = json.loads(message)
        player = self.players[client.id]
        pname = player.name

        match self.state:
            case State.LOBBY:
                response = {'status': 0, 'message':''}
                try:
                    if msg['action'] == 'configure':
                        print(f"{pname} configuring. name: {msg['options']['name']}. class: {msg['options']['playerclass']}.")
                        player.name = msg['options']['name']
                        player.playerclass = msg['options']['playerclass']
                        response['status'] = 1
                        response['message'] = 'configured'
                    elif msg['action'] == 'start_game':
                        print(f"Starting game!")
                        response['status'] = 1
                        response['message'] = 'starting'
                        self.srv.disallow_new_connections()
                except:
                    response['message'] = 'incorrect_request'
                    response['status'] = 0
            case State.PRESENT_ROOM:
                pass
            case State.SUBMIT_ANSWERS:
                pass
            case State.VOTING:
                pass
            case State.CHOOSE_ITEMS:
                pass
            case State.EVENT_PRESENT:
                pass
            case State.EVENT_PICK_ITEMS:
                pass
            case State.EVENT_RESULT:
                pass
            case _:
                pass

    def client_left(self, client, server):
        print(f"Client left!")

game = Game()