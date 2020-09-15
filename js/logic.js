
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
  lat: 37.7790262,
  lon: -111.9738429,
  skill: ['SQL', 'SAS']
},
{
  job_title: "Other",
  industry: "Finance",
  avg_salary: "$60,000.00",
  lat: 37.7790262,
  lon: -122.4199061,
  skill: ['SQL', 'SAS']
}
];

var AL_list = [];
var AK_list = [];
var AZ_list = [];
var AR_list = [];
var CA_list = [];
var CO_list = [];
var CT_list = [];
var DE_list = [];
var DC_list = [];
var FL_list = [];
var GA_list = [];
var HI_list = [];
var ID_list = [];
var IL_list = [];
var IA_list = [];
var KS_list = [];
var KY_list = [];
var LA_list = [];
var ME_list = [];
var MD_list = [];
var MA_list = [];
var MI_list = [];
var MN_list = [];
var MS_list = [];
var MO_list = [];
var MT_list = [];
var NE_list = [];
var NV_list = [];
var NH_list = [];
var NJ_list = [];
var NM_list = [];
var NY_list = [];
var NC_list = [];
var ND_list = [];
var OH_list = [];
var OK_list = [];
var OR_list = [];
var PA_list = [];
var RI_list = [];
var SC_list = [];
var SD_list = [];
var TN_list = [];
var TX_list = [];
var UT_list = [];
var VT_list = [];
var VA_list = [];
var WA_list = [];
var WV_list = [];
var WI_list = [];
var WY_list = [];
// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map

// nested if to check selected entries
for (var i = 0; i < jobs.length; i++) {
  var job = jobs[i];
  var job_title_fix = job.job_title.replace(" ","_").toUpperCase()
  
  // if (job.job_title == "Data Analyst") {
  //   DA.push({job});
  //   var newMarker = L.marker([job.lat, job.lon])
  //     .bindPopup("<h1>" + job.job_title + "</h1> <hr> <h3>Industry: " + job.industry + "</h3> <br> <h3>Avg Salary: " + job.avg_salary + "</h3>")

  //   // Add the new marker to the appropriate layer
  //   newMarker.addTo(layers[job_title_fix]);
  // };
  var newMarker = L.marker([job.lat, job.lon])
    .bindPopup("<h1>" + job.job_title + "</h1> <hr> <h3>Industry: " + job.industry + "</h3> <br> <h3>Avg Salary: " + job.avg_salary + "</h3>")

  // Add the new marker to the appropriate layer
  newMarker.addTo(layers[job_title_fix]);
}
for (var i=0; i<jobs.length; i++){
  var job=jobs[i];

  if (job.state == "AL"){
    AL_list.push({job});
  } else if (job.state == "AK"){
    AK_list.push({job});
  } else if (job.state == "AZ"){
    AZ_list.push({job});
  } else if (job.state == "AR"){
    AR_list.push({job});
  } else if (job.state == "CA"){
    CA_list.push({job})
  } else if (job.state == "CO"){
    CO_list.push({job})
  } else if (job.state == "CT"){
    CT_list.push({job})
  } else if (job.state == "DE"){
    DE_list.push({job})
  } else if (job.state == "DC"){
    DC_list.push({job})
  } else if (job.state == "FL"){
    FL_list.push({job})
  } else if (job.state == "GA"){
    GA_list.push({job})
  } else if (job.state == "HI"){
    HI_list.push({job})
  } else if (job.state == "ID"){
    ID_list.push({job})
  } else if (job.state == "IL"){
    IL_list.push({job})
  } else if (job.state == "IA"){
    IA_list.push({job})
  } else if (job.state == "KS"){
    KS_list.push({job})
  } else if (job.state == "KY"){
    KY_list.push({job})
  } else if (job.state == "LA"){
    LA_list.push({job})
  } else if (job.state == "ME"){
    ME_list.push({job})
  } else if (job.state == "MD"){
    MD_list.push({job})
  } else if (job.state == "MA"){
    MA_list.push({job})
  } else if (job.state == "MI"){
    MI_list.push({job})
  } else if (job.state == "MN"){
    MN_list.push({job})
  } else if (job.state == "MS"){
    MS_list.push({job})
  }
}
//ref citibike exercise for multiple layer conditioning