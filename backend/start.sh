#!/bin/bash

screen -dm -S broker ./broker.py
screen -dm -S server ./main.py