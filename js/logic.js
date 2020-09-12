// Initialize all of the LayerGroups we'll be using
var layers = {
  DATA_ANALYST: new L.LayerGroup(),
  DATA_SCIENTIST: new L.LayerGroup(),
  OTHER: new L.LayerGroup()
};

// Creating map object
var myMap = L.map("map", {
  center: [37.7790262, -122.4199061],
  zoom: 12,
  layers: [
    layers.DATA_ANALYST,
    layers.DATA_SCIENTIST,
    layers.OTHER
  ]
});

// Create an overlays object to add to the layer control
var overlays = {
  "Data Analyst": layers.DATA_ANALYST,
  "Data Scientist": layers.DATA_SCIENTIST,
  "Other": layers.OTHER
};

L.control.layers(null, overlays).addTo(myMap);

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
var jobs = [{
  job_title: "Data Analyst",
  industry: "Healthcare",
  avg_salary: "$107,858.74",
  lat: 37.7790262,
  lon: -122.4199061,
  skill: ['SQL', 'Python']
},
{
  job_title: "Data Analyst",
  industry: "Consulting",
  avg_salary: "$78,000.00",
  lat: 37.7790262,
  lon: -122.4199061,
  skill: ['SQL', 'Python', 'SAS']
},
{
  job_title: "Data Scientist",
  industry: "Healthcare",
  avg_salary: "$68,000.00",
  lat: 44.8546856,
  lon: -93.470786,
  skill: ['SQL', 'SAS']
},
{
  job_title: "Data Scientist",
  industry: "Media",
  avg_salary: "$60,000.00",
  lat: 41.2230048,
  lon: -111.9738429,
  skill: ['SQL', 'SAS']
},
{
  job_title: "Other",
  industry: "Finance",
  avg_salary: "$60,000.00",
  lat: 38.7150511,
  lon: -80.2710557,
  skill: ['SQL', 'SAS']
}
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map

// nested if to check selected entries
for (var i = 0; i < jobs.length; i++) {
  var job = jobs[i];
  var job_title_fix = job.job_title.replace(" ","_").toUpperCase()

  var newMarker = L.marker([job.lat, job.lon])
    .bindPopup("<h1>" + job.job_title + "</h1> <hr> <h3>Industry: " + job.industry + "</h3> <br> <h3>Avg Salary: " + job.avg_salary + "</h3>")

  // Add the new marker to the appropriate layer
  newMarker.addTo(layers[job_title_fix]);
}



//ref citibike exercise for multiple layer conditioning