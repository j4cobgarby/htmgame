#!/usr/bin/python

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

class GameState(Enum):
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
        self.players = []
        self.state = GameState.LOBBY

        self.srv = WebsocketServer(host="127.0.0.1", port=6483)
        self.srv.set_fn_new_client(self.new_client)
        self.srv.set_fn_message_received(self.message_received)
        self.srv.set_fn_client_left(self.client_left)

        self.srv.allow_new_connections()
        self.srv.run_forever()

    def new_client(self, client, server):
        if self.state == GameState.LOBBY:
            players[client.id] = Character("", playerclass)
            server.send_message(client, json.dumps({
                "status": 0,
                "message": f"join_success"
            }))
        else:
            server.send_message(client, json.dumps({
                "status": 0,
                "message": "join_failure"
            }))

    def message_received(self, client, server, message):
        print(f"Message from {client}: {message}")

    def client_left(self, client, server):
        print(f"Client left!")

game = Game()