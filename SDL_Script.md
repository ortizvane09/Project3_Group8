Hello, my name is Shannon Lloyd. I am a member of Group 8 which consists of Manasi Shidhaye, Vanessa Ortiz, Isaac Gish, and myself.

For our story tonight we are a custom hat company looking to open a new location.  We chose Texas because according to the U.S. Bureau of Economic Analysis Texas had the 12th highest per capita expenditures for clothing and footwear in 2021 with a value of $1,433 per capita.  We want to decide where would be a good location to maximize our chances for success. Looked at the per capita income information and population values available for all counties in Texas. We expected to look mainly for higher income but Texas had some surprises for us which we will show you with our data.


(Slide with BEA logo)

To gather the raw data we used Splinter  and Beautiful Soup to scrape the Bureau of Economic Analysis site. Splinter was used to automate the process while Beautiful Soup was used to scrape the site.  Through this process we successfully gathered the Per Capita Income for Texas counties for their most recent reporting year, 2021. We then repeated this process to gather data for the population totals for TX counties for 2021. This data was saved to an Income Json file and a Population Json file respectively.  

(Slide with images of the Income and Population Dataframes from Jupyter Lab and MongoDB image)

We then stored this information in Dataframes in order to clean the data of any null value data. We then created a Mongo Database containing 2 tables. One for the Per Capita Income and one for the Population Totals.

For our convenience, we also created a Json file that contained the combined data and a Javascript file to simplify the process of creating our visualizations.

I will now pass things off to Isaac.

Hi, my name is Isaac Gish and i'll be covering two of our three of visualizations. 

(Slide with Choropleth Code)

Each of these maps were made in javascript using the Choropleth library to show the levels of per capita income, and population in Texas counties.

(Slide with maps side by side)

The legned is in the top right, showing green as the highest level, and dark red as the next level. For our analysis of counties, we were looking for those that were green or dark red on both maps. We wanted counties with high population to have a large market for our hats, and those who could pay the fancy price, so we decided to view our data in maps. 

The third way we decided to show our data was through a chart, using a new javascript Library named Chart.JS. I will now pass it to Vanessa to explain this part. 

***WELCOME, EVERYONE. Today, we're excited to share our experience with the Chart.js library in JavaScript. When we began the installation process, we encountered some initial hurdles. To utilize Chart.js, we first needed to set up Node.js on our system.
Chart.js proved to be a game-changer for us, enabling us to present income and population data in one visualization.
Our website leverages Flask as a backend framework. The drop-down menu functionality is driven by the server.
We connect Flask with a MongoDB database to populate the drop-down menu with dynamic data.
The response upon selecting a city is directly pulled from the MongoDB database.
The drop-down menu is designed to make data retrieval more intuitive. If users prefer not to search by map, they can easily locate the county on the map.
In conclusion, integrating Chart.js and Flask has enriched our website's functionality, providing multiple avenues for users to access and interact with data.
Thank you for your attention. I will pass this onto Manasi.***