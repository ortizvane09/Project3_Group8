// Creating the map object
let myMap = L.map("map", {
  center: [31.9686, -99.9018],
  zoom: 6
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Use this link to get the GeoJSON data.
let link = "https://data.cityofdenton.com/dataset/0c4fcbc0-6c9a-4c76-98e2-d29f918e31c6/resource/be1b384f-3b2e-4238-88a8-4410cb36f7fc/download/c8efcc13-b5b4-48b5-9873-933844822d6ctexascounties.geojson";

// Getting our GeoJSON data
d3.json(link).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data).addTo(myMap);
});
