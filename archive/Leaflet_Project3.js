// Creating the map object
let myMap = L.map("map", {
  center: [31.9686, -99.9018],
  zoom: 6
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// // Use this link to get the GeoJSON data.
// // let glink = "Texas_counties_cwntroid_map.geogson";
// let link = "https://data.cityofdenton.com/dataset/0c4fcbc0-6c9a-4c76-98e2-d29f918e31c6/resource/be1b384f-3b2e-4238-88a8-4410cb36f7fc/download/c8efcc13-b5b4-48b5-9873-933844822d6ctexascounties.geojson";

// Getting our GeoJSON data
d3.json(link).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data).addTo(myMap);
});

// URL to your GeoJSON file
var geojsonUrl = "https://data.cityofdenton.com/dataset/0c4fcbc0-6c9a-4c76-98e2-d29f918e31c6/resource/be1b384f-3b2e-4238-88a8-4410cb36f7fc/download/c8efcc13-b5b4-48b5-9873-933844822d6ctexascounties.geojson";


// Create a Leaflet map
// var map = L.map('map').setView([latitude, longitude], zoom);

// Fetch the GeoJSON file and add it to the map
fetch(geojsonUrl)
  .then(function (response) {
    return response.json(); 
    // Parse the response as JSON
  })
  .then(function (geojsonData) {
    // Simulate fetching income and population data for each county
    // Replace this with your actual data source or API call
    var countyData = {
      'County X': { income: 50000, population: 100000 },
      'County Y': { income: 60000, population: 150000 },
      // Add more counties and data as needed
    };

    // Iterate through the GeoJSON features
    geojsonData.features.forEach(function (feature) {
      var countyName = feature.properties.name;
      var countyDataEntry = countyData[countyName];

      if (countyDataEntry) {
        // Access income and population data
        var income = countyDataEntry.income;
        var population = countyDataEntry.population;

        // Use income data to determine color
        var color;
        if (income < 50000) {
          color = 'red';
        } else if (income < 60000) {
          color = 'yellow';
        } else {
          color = 'green';
        }

        // Create a GeoJSON layer for each feature and set its style
        L.geoJSON(feature, {
          style: function () {
            return { fillColor: color, color: 'black', weight: 1, fillOpacity: 0.7 };
          },
        }).addTo(map);
      }
    });
  })
  .catch(function (error) {
    console.error('Error fetching GeoJSON:', error);
  });


// let heatArray = [];

// for (let i = 0; i < features.length; i++) {
//   let location = features[i].geometry;
//   if (location) {
//     //console.log(location);
//     heatArray.push([location.coordinates[1], location.coordinates[0]]);
//   }

// }

// let heat = L.heatLayer(heatArray, {
//   radius: 20,
//   blur: 35
// }).addTo(myMap);



// // function chooseColor(Income) {
// //   if (Income>40,000) return "yellow";
// //   else if (Income>50,000) return "red";
// //   else if (Income>60,000) return "orange";
// //   else if (Income>70,000) return "green";
// //   else if (Income>80,000) return "purple";
// //   else return "black";
// // }

// // // Getting our GeoJSON data
// // d3.json(link).then(function(data) {
// //   // Creating a GeoJSON layer with the retrieved data
// //   L.geoJson(data, {
// //     // Styling each feature (in this case, a neighborhood)
// //     style: function(feature) {
// //       return {
// //         color: "white",
// //         // Call the chooseColor() function to decide which color to color our neighborhood. (The color is based on the borough.)
// //         fillColor: chooseColor(feature.properties.Income),
// //         fillOpacity: 0.5,
// //         weight: 1.5
// //       };
// //     },
// //     // This is called on each feature.
// //     onEachFeature: function(feature, layer) {
// //       // Set the mouse events to change the map styling.
// //       layer.on({
// //         // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 90% so that it stands out.
// //         mouseover: function(event) {
// //           layer = event.target;
// //           layer.setStyle({
// //             fillOpacity: 0.9
// //           });
// //         },
// //         // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 50%.
// //         mouseout: function(event) {
// //           layer = event.target;
// //           layer.setStyle({
// //             fillOpacity: 0.5
// //           });
// //         },
// //         // When a feature (neighborhood) is clicked, it enlarges to fit the screen.
// //         click: function(event) {
// //           myMap.fitBounds(event.target.getBounds());
// //         }
// //       });
// //       // Giving each feature a popup with information that's relevant to it
// //       layer.bindPopup("<h1>" + feature.properties.county + "</h1> <hr> <h2>" + feature.properties.Income + "</h2>"+ "<hr> <h2>" + 
// //       feature.properties.population + "</h2>"");
// //     }
// //   }).addTo(myMap);
// // });