Hello, my name is Shannon Lloyd. I am a member of Group 8 which consists of Manasi Shidhaye, Vanessa Ortiz, Isaac Gish, and myself.

For our story tonight we are a luxury apparel company looking to open a new location.  We chose Texas because according to the U.S. Bureau of Economic Analysis Texas had the 12th highest per capita expenditures for clothing and footwear in 2021 with a value of $1,433 per capita.  We want to decide where would be a good location to maximize our chances for success. Looked at the per capita income information and population values available for all counties in Texas. We expected to look mainly for higher income but Texas had some surprises for us which we will show you with our data.


(Slide with BEA logo)

To gather the raw data we used Splinter  and Beautiful Soup to scrape the Bureau of Economic Analysis site. Splinter was used to automate the process while Beautiful Soup was used to scrape the site.  Through this process we successfully gathered the Per Capita Income for Texas counties for their most recent reporting year, 2021. We then repeated this process to gather data for the population totals for TX counties for 2021. This data was saved to an Income Json file and a Population Json file respectively.  

(Slide with images of the Income and Population Dataframes from Jupyter Lab and MongoDB image)

We then stored this information in Dataframes in order to clean the data of any null value data. We then created a Mongo Database containing 2 tables. One for the Per Capita Income and one for the Population Totals.

For our convenience, we also created a Json file that contained the combined data and a Javascript file to simplify the process of creating our visualizations.

I will now pass things off to Isaac.