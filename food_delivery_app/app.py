from flask import Flask, render_template, request, jsonify
import json
app = Flask(__name__)
with open('restaurants.json') as f : #data->JSON
    restaurants = json.load(f)
    print(restaurants)
@app.route('/')
def index():
    with open('restaurants.json') as f:
        restaurants = json.load(f)
    return render_template('index.html', restaurants=restaurants)

@app.route('/search',methods=['GET']) #Search_&_filter_feature:
def search():
    cuisine= request.args.get('cuisine').lower()
    filtered_restaurants= [r for r in restaurants if cuisine in r['cuisine'].lower()]
    return jsonify(filtered_restaurants)
if __name__ == '__main__':
    app.run(debug=True)





