#!/usr/bin/env python3

from flask import Flask, render_template

app=Flask(__name__, static_folder='./static/dist', template_folder='./static/public')

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/<path:path>', methods=['GET'])
def all_root_paths(path):
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080)
