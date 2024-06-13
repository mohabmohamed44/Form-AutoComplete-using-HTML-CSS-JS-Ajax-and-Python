from flask import Flask, request, jsonify, render_template
import os

app = Flask(__name__)

# Load names from names.txt file
names_file = os.path.join(os.path.dirname(__file__), 'names.txt')
with open(names_file, 'r', encoding='utf-8') as f:
    users = [line.strip() for line in f.readlines()]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/autocomplete', methods=['GET'])
def autocomplete():
    query = request.args.get('query', '')
    suggestions = [name for name in users if query.lower() in name.lower()]
    return jsonify(suggestions)

if __name__ == '__main__':
    app.run(debug=True)
