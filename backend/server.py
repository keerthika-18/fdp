from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from werkzeug.security import check_password_hash, generate_password_hash
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["MONGO_URI"] = "mongodb://localhost:27017/REC"
mongo = PyMongo(app)

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if username and email and password:
        hashed_password = generate_password_hash(password)
        mongo.db.users.insert_one({
            'username': username,
            'email': email,
            'password': hashed_password
        })
        return jsonify({'message': 'User registered successfully'}), 201
    return jsonify({'error': 'Missing fields'}), 400

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    user = mongo.db.users.find_one({'username': username})

    if user and check_password_hash(user['password'], password):
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'error': 'Invalid credentials'}), 401

if __name__ == '__main__':
    app.run(debug=True)
