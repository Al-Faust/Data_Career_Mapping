var analystMarkers = [];
var scientistMarkers = [];
var engineerMarkers = [];
var otherMarkers = [];


// Loop through locations and create city and state markers
for (var i = 0; i < locations.length; i++) {
  // Setting the marker radius for the state by passing population into the markerSize function
  analystMarkers.push(
    L.marker([sqlcall[i].lat, sqlcall[i].lng], {
      stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "white",
    })
  );

  // Setting the marker radius for the city by passing population into the markerSize function
  scientistMarkers.push(
    L.marker([sqlcall[i].lat, sqlcall[i].lng], {
      stroke: false,
      fillOpacity: 0.75,
      color: "purple",
      fillColor: "purple",
    })
  );
}

.bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")

// Function to determine marker size based on population
function markerSize(population) {
    return population / 40;
  }
  

  
  // Create base layers
  
  // Streetmap Layer
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });

  
  // Create separate layer groups: one for scientists, analysts, engineers and one for others
  var analyst = L.layerGroup(analystMarkers);
  var scientist = L.layerGroup(scientistMarkers);
  var engineer = L.layerGroup(engineerMarkers);
  var other = L.layerGroup(otherMarkers)
  
  // Create a baseMaps object
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };
  
  // Create an overlay object
  var overlayMaps = {
    "Data Analyst": analyst,
    "Data Scientist": scientist,
    "Data Engineer": engineer,
    "Other": other

  };
  
  // Define a map object
  var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [streetmap, analyst, scientist, engineer, other]
  });
  
  // Pass our map layers into our layer control
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
  