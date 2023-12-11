from flask import Flask, jsonify

app = Flask(__name__)

# Define an API endpoint that returns a JSON response
@app.route('/api/data', methods=['GET'])
def get_data():
    data = {'message': 'Hello, this is your API!'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)