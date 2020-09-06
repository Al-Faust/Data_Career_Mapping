// Initialize all of the LayerGroups we'll be using
var layers = {
  dataAnalyst: new L.LayerGroup(),
  dataScientist: new L.LayerGroup(),
  python: new L.LayerGroup(),
  sql: new L.LayerGroup(),
  javascript: new L.LayerGroup(),
  java: new L.LayerGroup(),
  hadoop: new L.LayerGroup(),
  excel: new L.LayerGroup(),
  spark: new L.LayerGroup(),
  sas: new L.LayerGroup()
};

// Creating map object
var myMap = L.map("map", {
  center: [40.7128, -74.0059],
  zoom: 11,
  layers: [
    layers.dataAnalyst,
    layers.dataScientist,
    layers.python,
    layers.sql,
    layers.javascript,
    layers.java,
    layers.hadoop,
    layers.excel,
    layers.spark,
    layers.sas
  ]
});

// Create a control for our layers, add our overlay layers to it
L.control.layers(null, overlays).addTo(myMap);

// Create a legend to display information about our map
var info = L.control({
  position: "bottomright"
});

// When the layer control is added, insert a div with the class of "legend"
info.onAdd = function() {
  var div = L.DomUtil.create("div", "legend");
  return div;
};
// Add the info legend to the map
info.addTo(myMap);

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, location, and population
var cities = [{
  Job_Title_Fixed: "Data Scientist",
  avg_salary: "$107,858.74",
  population: "8,550,405"
},
{
  location: [41.8781, -87.6298],
  name: "Chicago",
  population: "2,720,546"
},
{
  location: [29.7604, -95.3698],
  name: "Houston",
  population: "2,296,224"
},
{
  location: [34.0522, -118.2437],
  name: "Los Angeles",
  population: "3,971,883"
},
{
  location: [41.2524, -95.9980],
  name: "Omaha",
  population: "446,599"
}
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map

// nested if to check selected entries
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")
    .addTo(myMap);
}

//ref citibike exercise for multiple layer conditioning