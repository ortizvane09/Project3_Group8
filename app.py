from pymongo import MongoClient

from flask import Flask, render_template, request


#################################################
# Database Setup
#################################################
# Create an instance of MongoClient
mongo = MongoClient(port=27017)
db = mongo['Project_3_DB']
# assign each collection to a variable
income = db['Income']
population = db['Population']
#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route('/') 
def index(): 
    # db.Income.County()
    # query = {}
    # fields = {'County': 1}
    # cityList= income.find(query, fields)
    
    countyList = [{'County':'Travis'}, {'County': 'Hays'}, {'County': 'Bastrop'}]
    return render_template("index2.html",countyList=countyList )
    # return render_template('index.html') 



if __name__ == '__main__':
    app.run(debug=True)
