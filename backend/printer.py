import serial, math

class Printer:
    def __init__(self, port: int, baudrate: int = 38400):
        self.font1 = 42 # Number of chars
        self.font2 = 56
        self.xscale = 1
        self.conn = serial.Serial()
        self.conn.port = port
        self.conn.baudrate = baudrate
        self.conn.open()
        self.conn.write(b"\x1b@") # Innit printer

    def print(self, text: str, font:int = 0) -> None:
        text = text.split()
        if font == 0:
            self.conn.write(b"\x1b\x4d\x00\n") # Set font 1
            length = 0
            for x in range(len(text)):
                self.conn.write(text[x].encode())
                length += (len(text[x]))
                try:
                    if length+len(text[x+1])+1 > math.floor(self.font1/self.xscale):
                        self.conn.write(b"\n")
                        length = 0
                    else:
                        self.conn.write(b' ')
                        length+=1
                except IndexError:
                    pass
            self.conn.write(b"\n")
        elif font == 1:
            self.conn.write(b"\x1b\x4d\x01\n") # Set font 2
            length = 0
            for x in range(len(text)):
                self.conn.write(text[x].encode())
                length += (len(text[x]))
                try:
                    if length+len(text[x+1])+1 > math.floor(self.font2/self.xscale):
                        self.conn.write(b"\n")
                        length = 0
                    else:
                        self.conn.write(b' ')
                        length+=1
                except IndexError:
                    pass
            self.conn.write(b"\n")

    def print_raw(self, text: bytes) -> None:
        self.conn.write(text)       

    def feed_cut(self, length: int = 1) -> None:
        self.conn.write(f"\x1d\x56\x41{chr(length)}".encode())

    def feed_lines(self, length: int = 1) -> None:
        self.conn.write(f"\x1b\x64{chr(length)}".encode())

    def set_scale(self, x: int, y: int) -> None:
        self.xscale = x
        scale = ((x-1) << 4) | (y-1)
        self.conn.write(f"\x1d\x21{chr(scale)}".encode())

    def line_spacing(self, space: int = None) -> None:
        if space is None:
            self.conn.write(b"\x1b\x32") # Reset it
        else:
            self.conn.write(f"\x1b\x33{chr(space)}".encode())

    def close(self) -> None:
        self.conn.close()

if __name__ == '__main__':
    p = Printer('COM1')
    p.close()
