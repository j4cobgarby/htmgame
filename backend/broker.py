#!/usr/bin/env python
# Author: Oliver Malkin
# Date: 29/10/2022
# Purpose:
# Generates a new room code (4 character - alphaneumeric)
# POST request /broker/makecode return code
# POST request /broker/removecode/{code} removes the code
# GET reuqest /broker/getinfo/{code} returns info the broker has about the code

import random, json, socket
from flask import Flask
from datetime import datetime

app = Flask(__name__)

games = {} # Stores all the game codes

@app.route('/broker/makecode', methods=['POST'])
def makecode():
    room_code = None

    while room_code not in games:
        room_code = ''.join([str(random.choice("123457890QWERTYUIOPASDFGHJKLZXCVBNM")) for i in range(6)])
        if room_code not in games:
            games[room_code] = {
                'time_created': datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%S+UTC"),
                'status': 1
                }

    return json.dumps({
        'code': room_code,
        'status': 1
        }
    )     

@app.route('/broker/removecode/<code>', methods=['POST'])
def remove_ip(code: str):
    try:
        games.pop(code.upper())
        return {'status': 1}
    except:
        return {'status': 0}

@app.route('/broker/getinfo/<code>', methods=['GET'])
def getinfo(code: str):
    try:
        return json.dumps(games[code.upper()])
    except KeyError:
        return {'status': 0}

if __name__ == '__main__':
    app.run(host=socket.gethostname())