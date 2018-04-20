#!/usr/bin/env python3

from flask import Flask, send_from_directory

app=Flask(__name__, static_folder='application/templates/src')

@app.route('/', methods=['GET'])
def index():
    return send_from_directory('./templates/public', 'index.html')

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080)
