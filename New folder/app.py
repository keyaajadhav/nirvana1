from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Dummy database for now
users = {
    "test@example.com": {
        "password": "123456",
        "profile_name": "Test User"
    }
}

@app.route("/api/signin", methods=["POST"])
def signin():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = users.get(email)
    if user and user["password"] == password:
        return jsonify({"message": "Login successful", "profile_name": user["profile_name"]}), 200
    return jsonify({"message": "Invalid credentials"}), 401

if __name__ == "__main__":
    app.run(debug=True,port=8000)
