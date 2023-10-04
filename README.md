# Project3_Group8

## Usage:

- To run the Income_Population_Project_3.ipynb file you will first want to do a mongo import to create the database and it's table. This is done by running the following 2 lines of code separately in your Git Bash window.

mongoimport --type json -d Project_3_DB -c Income --drop --jsonArray ./json_files/income_data.json

mongoimport --type json -d Project_3_DB -c Population --drop --jsonArray ./json_files/population_data.json

- To run the Flask API to render our results page open a Git Bash window in the same area as the app.py file. In the Git Bash window run the app.py by entering the following code into your Git Bash window.

python app.py

The results will have a http address in it, copy this address and paste it into your browser. The page will auto populate from the index.html template in the templates folder and the JavaScript and stylesheet files in the static folder.


## Citations and Acknowledgements:


County geojson file from: https://data.cityofdenton.com/dataset/texas-counties-polygon