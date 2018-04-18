#!/usr/bin/env python3

from flask import Flask

app=Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080)
