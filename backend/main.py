from websocket_server import WebsocketServer
import random
import csv

class GameServer(WebsocketServer):
    def __init__(self):
        WebsocketServer.__init__(self, host="127.0.0.1", port=6483)
        with open("items.csv", "r") as f:
            rdr = csv.reader(f)
            self.items = {(l[0], l[1]) for l in rdr}
        print(self.items)

    def randomise_joincode(self):
        self.code = ''.join([str(random.choice(range(10))) for i in range(4)])
        print(f"New join code = {self.code}")

srv = GameServer()

srv.run_forever()