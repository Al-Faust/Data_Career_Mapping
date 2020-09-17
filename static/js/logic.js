
// Initialize all of the LayerGroups we'll be using
var layers = {
  DATA_ANALYST: new L.LayerGroup(),
  DATA_SCIENTIST: new L.LayerGroup(),
  DATA_ENGINEER: new L.LayerGroup(),
  MACHINE_LEARNING_ENGINEER: new L.LayerGroup(),
  OTHERS: new L.LayerGroup()
};

// Creating map object
var myMap = L.map("map", {
  center: [38.6270, -90.1994],
  zoom: 5,
  layers: [
    layers.DATA_ANALYST,
    layers.DATA_SCIENTIST,
    layers.DATA_ENGINEER,
    layers.MACHINE_LEARNING_ENGINEER,
    layers.OTHERS
  ]
});

// Create an overlays object to add to the layer control
var overlays = {
  "Data Analyst": layers.DATA_ANALYST,
  "Data Scientist": layers.DATA_SCIENTIST,
  "Data Engineer": layers.DATA_ENGINEER,
  "Machine Learning Engineer": layers.MACHINE_LEARNING_ENGINEER,
  "Other": layers.OTHERS
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

function myFunc(jobs, avg_salary) {
  var jobs_json = jobs
  var avg_salary_json = avg_salary
  console.log(avg_salary_json)
  var AL_lat = 0;
  var AL_lon = 0;
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


  for (var i = 0; i < jobs_json.length; i++) {
    var job = jobs_json[i];

    if (job.state == "AL") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        AL_lat = Number(job.lat);
        AL_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        AL_lat = Number(job.lat);
        AL_lon = Number(job.lon);
      }
    } else if (job.state == "AK") {
      AK_list.push({ job });
    } else if (job.state == "AZ") {
      AZ_list.push({ job });
    } else if (job.state == "AR") {
      AR_list.push({ job });
    } else if (job.state == "CA") {
      CA_list.push({ job })
    } else if (job.state == "CO") {
      CO_list.push({ job })
    } else if (job.state == "CT") {
      CT_list.push({ job })
    } else if (job.state == "DE") {
      DE_list.push({ job })
    } else if (job.state == "DC") {
      DC_list.push({ job })
    } else if (job.state == "FL") {
      FL_list.push({ job })
    } else if (job.state == "GA") {
      GA_list.push({ job })
    } else if (job.state == "HI") {
      HI_list.push({ job })
    } else if (job.state == "ID") {
      ID_list.push({ job })
    } else if (job.state == "IL") {
      IL_list.push({ job })
    } else if (job.state == "IA") {
      IA_list.push({ job })
    } else if (job.state == "KS") {
      KS_list.push({ job })
    } else if (job.state == "KY") {
      KY_list.push({ job })
    } else if (job.state == "LA") {
      LA_list.push({ job })
    } else if (job.state == "ME") {
      ME_list.push({ job })
    } else if (job.state == "MD") {
      MD_list.push({ job })
    } else if (job.state == "MA") {
      MA_list.push({ job })
    } else if (job.state == "MI") {
      MI_list.push({ job })
    } else if (job.state == "MN") {
      MN_list.push({ job })
    } else if (job.state == "MS") {
      MS_list.push({ job })
    } else if (job.state == "MO") {
      MO_list.push({ job })
    } else if (job.state == "MT") {
      MT_list.push({ job })
    } else if (job.state == "NE") {
      NE_list.push({ job })
    } else if (job.state == "NV") {
      NV_list.push({ job })
    } else if (job.state == "NH") {
      NH_list.push({ job })
    } else if (job.state == "NJ") {
      NJ_list.push({ job })
    } else if (job.state == "NM") {
      NM_list.push({ job })
    } else if (job.state == "NY") {
      NY_list.push({ job })
    } else if (job.state == "NC") {
      NC_list.push({ job })
    } else if (job.state == "ND") {
      ND_list.push({ job })
    } else if (job.state == "OH") {
      OH_list.push({ job })
    } else if (job.state == "OK") {
      OK_list.push({ job })
    } else if (job.state == "OR") {
      OR_list.push({ job })
    } else if (job.state == "PA") {
      PA_list.push({ job })
    } else if (job.state == "RI") {
      RI_list.push({ job })
    } else if (job.state == "SC") {
      SC_list.push({ job })
    } else if (job.state == "SD") {
      SD_list.push({ job })
    } else if (job.state == "TN") {
      TN_list.push({ job })
    } else if (job.state == "TX") {
      TX_list.push({ job })
    } else if (job.state == "UT") {
      UT_list.push({ job })
    } else if (job.state == "VT") {
      VT_list.push({ job })
    } else if (job.state == "VA") {
      VA_list.push({ job })
    } else if (job.state == "WA") {
      WA_list.push({ job })
    } else if (job.state == "WV") {
      WV_list.push({ job })
    } else if (job.state == "WI") {
      WI_list.push({ job })
    } else if (job.state == "WY") {
      WY_list.push({ job })
    }
  };

  for (var i = 0; i < jobs_json.length; i++) {
    var salary_row = avg_salary_json[i];

    if (salary_row.state == "AL") {
      if (salary_row.job_title == "Data Analyst") {
        var AL_DA_marker = L.marker([AL_lat, AL_lon])
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr>  <br> <h3>Avg Salary: " + Number(salary_row.avg_salary) + "K</h3>")

        // Add the new marker to the appropriate layer
        AL_DA_marker.addTo(layers[DA_title_fix]);
      } else if (salary_row.job_title == "Data Scientist") {
        var AL_DS_marker = L.marker([AL_lat, AL_lon])
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr>  <br> <h3>Avg Salary: " + Number(salary_row.avg_salary) + "K</h3>")

        // Add the new marker to the appropriate layer
        AL_DS_marker.addTo(layers[DS_title_fix]);
      }
    } else if (job.state == "AK") {
      AK_list.push({ job });
    } else if (job.state == "AZ") {
      AZ_list.push({ job });
    } else if (job.state == "AR") {
      AR_list.push({ job });
    } else if (job.state == "CA") {
      CA_list.push({ job })
    } else if (job.state == "CO") {
      CO_list.push({ job })
    } else if (job.state == "CT") {
      CT_list.push({ job })
    } else if (job.state == "DE") {
      DE_list.push({ job })
    } else if (job.state == "DC") {
      DC_list.push({ job })
    } else if (job.state == "FL") {
      FL_list.push({ job })
    } else if (job.state == "GA") {
      GA_list.push({ job })
    } else if (job.state == "HI") {
      HI_list.push({ job })
    } else if (job.state == "ID") {
      ID_list.push({ job })
    } else if (job.state == "IL") {
      IL_list.push({ job })
    } else if (job.state == "IA") {
      IA_list.push({ job })
    } else if (job.state == "KS") {
      KS_list.push({ job })
    } else if (job.state == "KY") {
      KY_list.push({ job })
    } else if (job.state == "LA") {
      LA_list.push({ job })
    } else if (job.state == "ME") {
      ME_list.push({ job })
    } else if (job.state == "MD") {
      MD_list.push({ job })
    } else if (job.state == "MA") {
      MA_list.push({ job })
    } else if (job.state == "MI") {
      MI_list.push({ job })
    } else if (job.state == "MN") {
      MN_list.push({ job })
    } else if (job.state == "MS") {
      MS_list.push({ job })
    } else if (job.state == "MO") {
      MO_list.push({ job })
    } else if (job.state == "MT") {
      MT_list.push({ job })
    } else if (job.state == "NE") {
      NE_list.push({ job })
    } else if (job.state == "NV") {
      NV_list.push({ job })
    } else if (job.state == "NH") {
      NH_list.push({ job })
    } else if (job.state == "NJ") {
      NJ_list.push({ job })
    } else if (job.state == "NM") {
      NM_list.push({ job })
    } else if (job.state == "NY") {
      NY_list.push({ job })
    } else if (job.state == "NC") {
      NC_list.push({ job })
    } else if (job.state == "ND") {
      ND_list.push({ job })
    } else if (job.state == "OH") {
      OH_list.push({ job })
    } else if (job.state == "OK") {
      OK_list.push({ job })
    } else if (job.state == "OR") {
      OR_list.push({ job })
    } else if (job.state == "PA") {
      PA_list.push({ job })
    } else if (job.state == "RI") {
      RI_list.push({ job })
    } else if (job.state == "SC") {
      SC_list.push({ job })
    } else if (job.state == "SD") {
      SD_list.push({ job })
    } else if (job.state == "TN") {
      TN_list.push({ job })
    } else if (job.state == "TX") {
      TX_list.push({ job })
    } else if (job.state == "UT") {
      UT_list.push({ job })
    } else if (job.state == "VT") {
      VT_list.push({ job })
    } else if (job.state == "VA") {
      VA_list.push({ job })
    } else if (job.state == "WA") {
      WA_list.push({ job })
    } else if (job.state == "WV") {
      WV_list.push({ job })
    } else if (job.state == "WI") {
      WI_list.push({ job })
    } else if (job.state == "WY") {
      WY_list.push({ job })
    }
  }

  // console.log(AL_DA_salary/AL_DA_list.length)
  var AL_DA_marker = L.marker([AL_lat, AL_lon])
    .bindPopup("<h1>" + DA_html_title + "</h1> <hr>  <br> <h3>Avg Salary: " + AL_DA_salary / AL_DA_list.length + "K</h3>")

  // Add the new marker to the appropriate layer
  AL_DA_marker.addTo(layers[DA_title_fix]);

  var AL_DS_marker = L.marker([AL_lat, AL_lon])
    .bindPopup("<h1>" + DS_html_title + "</h1> <hr>  <br> <h3>Avg Salary: " + AL_DS_salary / AL_DS_list.length + "K</h3>")

  // Add the new marker to the appropriate layer
  AL_DS_marker.addTo(layers[DS_title_fix]);

}