//new icon colors
var violetIcon = new L.Icon({
	iconUrl: 'static/img/marker-icon-2x-violet.png',
	shadowUrl: 'static/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var goldIcon = new L.Icon({
	iconUrl: 'static/img/marker-icon-2x-gold.png',
	shadowUrl: 'static/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var redIcon = new L.Icon({
	iconUrl: 'static/img/marker-icon-2x-red.png',
	shadowUrl: 'static/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var greenIcon = new L.Icon({
	iconUrl: 'static/img/marker-icon-2x-green.png',
	shadowUrl: 'static/img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});
// Initialize all of the LayerGroups we'll be using
var layers = {
  DATA_ANALYST: new L.LayerGroup(),
  DATA_SCIENTIST: new L.LayerGroup(),
  DATA_ENGINEER: new L.LayerGroup(),
  MACHINE_LEARNING_ENGINEER: new L.LayerGroup(),
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
  ]
});

// Create an overlays object to add to the layer control
var overlays = {
  "Data Analyst": layers.DATA_ANALYST,
  "Data Scientist": layers.DATA_SCIENTIST,
  "Data Engineer": layers.DATA_ENGINEER,
  "Machine Learning Engineer": layers.MACHINE_LEARNING_ENGINEER,
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
  var AK_lat = 0;
  var AK_lon = 0;
  var AZ_lat = 0;
  var AZ_lon = 0;
  var AR_lat = 0;
  var AR_lon = 0;
  var CA_lat = 0;
  var CA_lon = 0;
  var CO_lat = 0;
  var CO_lon = 0;
  var CT_lat = 0;
  var CT_lon = 0;
  var DE_lat = 0;
  var DE_lon = 0;
  var DC_lat = 0;
  var DC_lon = 0;
  var FL_lat = 0;
  var FL_lon = 0;
  var GA_lat = 0;
  var GA_lon = 0;
  var HI_lat = 0;
  var HI_lon = 0;
  var ID_lat = 0;
  var ID_lon = 0;
  var IL_lat = 0;
  var IL_lon = 0;
  var IA_lat = 0;
  var IA_lon = 0;
  var KS_lat = 0;
  var KS_lon = 0;
  var KY_lat = 0;
  var KY_lon = 0;
  var LA_lat = 0;
  var LA_lon = 0;
  var ME_lat = 0;
  var ME_lon = 0;
  var MD_lat = 0;
  var MD_lon = 0;
  var MA_lat = 0;
  var MA_lon = 0;
  var MI_lat = 0;
  var MI_lon = 0;
  var MN_lat = 0;
  var MN_lon = 0;
  var MS_lat = 0;
  var MS_lon = 0;
  var MO_lat = 0;
  var MO_lon = 0;
  var MT_lat = 0;
  var MT_lon = 0;
  var NE_lat = 0;
  var NE_lon = 0;
  var NV_lat = 0;
  var NV_lon = 0;
  var NH_lat = 0;
  var NH_lon = 0;
  var NJ_lat = 0;
  var NJ_lon = 0;
  var NM_lat = 0;
  var NM_lon = 0;
  var NY_lat = 0;
  var NY_lon = 0;
  var NC_lat = 0;
  var NC_lon = 0;
  var ND_lat = 0;
  var ND_lon = 0;
  var OH_lat = 0;
  var OH_lon = 0;
  var OK_lat = 0;
  var OK_lon = 0;
  var OR_lat = 0;
  var OR_lon = 0;
  var PA_lat = 0;
  var PA_lon = 0;
  var RI_lat = 0;
  var RI_lon = 0;
  var SC_lat = 0;
  var SC_lon = 0;
  var SD_lat = 0;
  var SD_lon = 0;
  var TN_lat = 0;
  var TN_lon = 0;
  var TX_lat = 0;
  var TX_lon = 0;
  var UT_lat = 0;
  var UT_lon = 0;
  var VT_lat = 0;
  var VT_lon = 0;
  var VA_lat = 0;
  var VA_lon = 0;
  var WA_lat = 0;
  var WA_lon = 0;
  var WV_lat = 0;
  var WV_lon = 0;
  var WI_lat = 0;
  var WI_lon = 0;
  var WY_lat = 0;
  var WY_lon = 0;

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
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        AL_lat = Number(job.lat);
        AL_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        AL_lat = Number(job.lat);
        AL_lon = Number(job.lon);
      }
    } else if (job.state == "AK") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        AK_lat = Number(job.lat);
        AK_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        AK_lat = Number(job.lat);
        AK_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        AK_lat = Number(job.lat);
        AK_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        AK_lat = Number(job.lat);
        AK_lon = Number(job.lon);
      }
    } else if (job.state == "AZ") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        AZ_lat = Number(job.lat);
        AZ_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        AZ_lat = Number(job.lat);
        AZ_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        AZ_lat = Number(job.lat);
        AZ_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        AZ_lat = Number(job.lat);
        AZ_lon = Number(job.lon);
      }
    } else if (job.state == "AR") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        AR_lat = Number(job.lat);
        AR_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        AR_lat = Number(job.lat);
        AR_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        AR_lat = Number(job.lat);
        AR_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        AR_lat = Number(job.lat);
        AR_lon = Number(job.lon);
      }
    } else if (job.state == "CA") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        CA_lat = Number(job.lat);
        CA_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        CA_lat = Number(job.lat);
        CA_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        console.log(typeof MLE_title_fix)
      }
    } else if (job.state == "CO") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        CO_lat = Number(job.lat);
        CO_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        CO_lat = Number(job.lat);
        CO_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        CO_lat = Number(job.lat);
        CO_lon = Number(job.lon);
      }
    } else if (job.state == "CT") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        CT_lat = Number(job.lat);
        CT_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        CT_lat = Number(job.lat);
        CT_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        CT_lat = Number(job.lat);
        CT_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        CT_lat = Number(job.lat);
        CT_lon = Number(job.lon);
      }
    } else if (job.state == "DE") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        DE_lat = Number(job.lat);
        DE_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        DE_lat = Number(job.lat);
        DE_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        DE_lat = Number(job.lat);
        DE_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        DE_lat = Number(job.lat);
        DE_lon = Number(job.lon);
      }
    } else if (job.state == "DC") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        DC_lat = Number(job.lat);
        DC_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        DC_lat = Number(job.lat);
        DC_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        DC_lat = Number(job.lat);
        DC_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        DC_lat = Number(job.lat);
        DC_lon = Number(job.lon);
      }
    } else if (job.state == "FL") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        FL_lat = Number(job.lat);
        FL_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        FL_lat = Number(job.lat);
        FL_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        FL_lat = Number(job.lat);
        FL_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        FL_lat = Number(job.lat);
        FL_lon = Number(job.lon);
      }
    } else if (job.state == "GA") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        GA_lat = Number(job.lat);
        GA_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        GA_lat = Number(job.lat);
        GA_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        GA_lat = Number(job.lat);
        GA_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        GA_lat = Number(job.lat);
        GA_lon = Number(job.lon);
      }
    } else if (job.state == "HI") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        HI_lat = Number(job.lat);
        HI_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        HI_lat = Number(job.lat);
        HI_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        HI_lat = Number(job.lat);
        HI_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        HI_lat = Number(job.lat);
        HI_lon = Number(job.lon);
      }
    } else if (job.state == "ID") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        ID_lat = Number(job.lat);
        ID_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        ID_lat = Number(job.lat);
        ID_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        ID_lat = Number(job.lat);
        ID_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        ID_lat = Number(job.lat);
        ID_lon = Number(job.lon);
      }
    } else if (job.state == "IL") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        IL_lat = Number(job.lat);
        IL_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        IL_lat = Number(job.lat);
        IL_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        IL_lat = Number(job.lat);
        IL_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        IL_lat = Number(job.lat);
        IL_lon = Number(job.lon);
      }
    } else if (job.state == "IA") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        IA_lat = Number(job.lat);
        IA_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        IA_lat = Number(job.lat);
        IA_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        IA_lat = Number(job.lat);
        IA_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        IA_lat = Number(job.lat);
        IA_lon = Number(job.lon);
      }
    } else if (job.state == "KS") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        KS_lat = Number(job.lat);
        KS_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        KS_lat = Number(job.lat);
        KS_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        KS_lat = Number(job.lat);
        KS_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        KS_lat = Number(job.lat);
        KS_lon = Number(job.lon);
      }
    } else if (job.state == "KY") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        KY_lat = Number(job.lat);
        KY_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        KY_lat = Number(job.lat);
        KY_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        KY_lat = Number(job.lat);
        KY_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        KY_lat = Number(job.lat);
        KY_lon = Number(job.lon);
      }
    } else if (job.state == "LA") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        LA_lat = Number(job.lat);
        LA_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        LA_lat = Number(job.lat);
        LA_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        LA_lat = Number(job.lat);
        LA_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        LA_lat = Number(job.lat);
        LA_lon = Number(job.lon);
      }
    } else if (job.state == "ME") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        ME_lat = Number(job.lat);
        ME_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        ME_lat = Number(job.lat);
        ME_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        ME_lat = Number(job.lat);
        ME_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        ME_lat = Number(job.lat);
        ME_lon = Number(job.lon);
      }
    } else if (job.state == "MD") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        MD_lat = Number(job.lat);
        MD_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        MD_lat = Number(job.lat);
        MD_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        MD_lat = Number(job.lat);
        MD_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        MD_lat = Number(job.lat);
        MD_lon = Number(job.lon);
      }
    } else if (job.state == "MA") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        MA_lat = Number(job.lat);
        MA_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        MA_lat = Number(job.lat);
        MA_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        MA_lat = Number(job.lat);
        MA_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        MA_lat = Number(job.lat);
        MA_lon = Number(job.lon);
      }
    } else if (job.state == "MI") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        MI_lat = Number(job.lat);
        MI_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        MI_lat = Number(job.lat);
        MI_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        MI_lat = Number(job.lat);
        MI_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        MI_lat = Number(job.lat);
        MI_lon = Number(job.lon);
      }
    } else if (job.state == "MN") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        MN_lat = Number(job.lat);
        MN_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        MN_lat = Number(job.lat);
        MN_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        MN_lat = Number(job.lat);
        MN_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        MN_lat = Number(job.lat);
        MN_lon = Number(job.lon);
      }
    } else if (job.state == "MS") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        MS_lat = Number(job.lat);
        MS_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        MS_lat = Number(job.lat);
        MS_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        MS_lat = Number(job.lat);
        MS_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        MS_lat = Number(job.lat);
        MS_lon = Number(job.lon);
      }
    } else if (job.state == "MO") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        MO_lat = Number(job.lat);
        MO_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        MO_lat = Number(job.lat);
        MO_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        MO_lat = Number(job.lat);
        MO_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        MO_lat = Number(job.lat);
        MO_lon = Number(job.lon);
      }
    } else if (job.state == "MT") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        MT_lat = Number(job.lat);
        MT_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        MT_lat = Number(job.lat);
        MT_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        MT_lat = Number(job.lat);
        MT_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        MT_lat = Number(job.lat);
        MT_lon = Number(job.lon);
      }
    } else if (job.state == "NE") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        NE_lat = Number(job.lat);
        NE_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        NE_lat = Number(job.lat);
        NE_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        NE_lat = Number(job.lat);
        NE_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        NE_lat = Number(job.lat);
        NE_lon = Number(job.lon);
      }
    } else if (job.state == "NV") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        NV_lat = Number(job.lat);
        NV_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        NV_lat = Number(job.lat);
        NV_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        NV_lat = Number(job.lat);
        NV_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        NV_lat = Number(job.lat);
        NV_lon = Number(job.lon);
      }
    } else if (job.state == "NH") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        NH_lat = Number(job.lat);
        NH_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        NH_lat = Number(job.lat);
        NH_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        NH_lat = Number(job.lat);
        NH_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        NH_lat = Number(job.lat);
        NH_lon = Number(job.lon);
      }
    } else if (job.state == "NJ") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        NJ_lat = Number(job.lat);
        NJ_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        NJ_lat = Number(job.lat);
        NJ_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        NJ_lat = Number(job.lat);
        NJ_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        NJ_lat = Number(job.lat);
        NJ_lon = Number(job.lon);
      }
    } else if (job.state == "NM") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        NM_lat = Number(job.lat);
        NM_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        NM_lat = Number(job.lat);
        NM_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        NM_lat = Number(job.lat);
        NM_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        NM_lat = Number(job.lat);
        NM_lon = Number(job.lon);
      }
    } else if (job.state == "NY") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        NY_lat = Number(job.lat);
        NY_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        NY_lat = Number(job.lat);
        NY_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        NY_lat = Number(job.lat);
        NY_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        NY_lat = Number(job.lat);
        NY_lon = Number(job.lon);
      }
    } else if (job.state == "NC") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        NC_lat = Number(job.lat);
        NC_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        NC_lat = Number(job.lat);
        NC_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        NC_lat = Number(job.lat);
        NC_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        NC_lat = Number(job.lat);
        NC_lon = Number(job.lon);
      }
    } else if (job.state == "ND") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        ND_lat = Number(job.lat);
        ND_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        ND_lat = Number(job.lat);
        ND_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        ND_lat = Number(job.lat);
        ND_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        ND_lat = Number(job.lat);
        ND_lon = Number(job.lon);
      }
    } else if (job.state == "OH") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        OH_lat = Number(job.lat);
        OH_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        OH_lat = Number(job.lat);
        OH_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        OH_lat = Number(job.lat);
        OH_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        OH_lat = Number(job.lat);
        OH_lon = Number(job.lon);
      }
    } else if (job.state == "OK") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        OK_lat = Number(job.lat);
        OK_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        OK_lat = Number(job.lat);
        OK_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        OK_lat = Number(job.lat);
        OK_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        OK_lat = Number(job.lat);
        OK_lon = Number(job.lon);
      }
    } else if (job.state == "OR") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        OR_lat = Number(job.lat);
        OR_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        OR_lat = Number(job.lat);
        OR_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        OR_lat = Number(job.lat);
        OR_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        OR_lat = Number(job.lat);
        OR_lon = Number(job.lon);
      }
    } else if (job.state == "PA") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        PA_lat = Number(job.lat);
        PA_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        PA_lat = Number(job.lat);
        PA_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        PA_lat = Number(job.lat);
        PA_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        PA_lat = Number(job.lat);
        PA_lon = Number(job.lon);
      }
    } else if (job.state == "RI") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        RI_lat = Number(job.lat);
        RI_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        RI_lat = Number(job.lat);
        RI_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        RI_lat = Number(job.lat);
        RI_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        RI_lat = Number(job.lat);
        RI_lon = Number(job.lon);
      }
    } else if (job.state == "SC") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        SC_lat = Number(job.lat);
        SC_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        SC_lat = Number(job.lat);
        SC_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        SC_lat = Number(job.lat);
        SC_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        SC_lat = Number(job.lat);
        SC_lon = Number(job.lon);
      }
    } else if (job.state == "SD") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        SD_lat = Number(job.lat);
        SD_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        SD_lat = Number(job.lat);
        SD_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        SD_lat = Number(job.lat);
        SD_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        SD_lat = Number(job.lat);
        SD_lon = Number(job.lon);
      }
    } else if (job.state == "TN") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        TN_lat = Number(job.lat);
        TN_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        TN_lat = Number(job.lat);
        TN_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        TN_lat = Number(job.lat);
        TN_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        TN_lat = Number(job.lat);
        TN_lon = Number(job.lon);
      }
    } else if (job.state == "TX") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        TX_lat = Number(job.lat);
        TX_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        TX_lat = Number(job.lat);
        TX_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        TX_lat = Number(job.lat);
        TX_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        TX_lat = Number(job.lat);
        TX_lon = Number(job.lon);
      }
    } else if (job.state == "UT") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        UT_lat = Number(job.lat);
        UT_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        UT_lat = Number(job.lat);
        UT_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        UT_lat = Number(job.lat);
        UT_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        UT_lat = Number(job.lat);
        UT_lon = Number(job.lon);
      }
    } else if (job.state == "VT") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        VT_lat = Number(job.lat);
        VT_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        VT_lat = Number(job.lat);
        VT_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        VT_lat = Number(job.lat);
        VT_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        VT_lat = Number(job.lat);
        VT_lon = Number(job.lon);
      }
    } else if (job.state == "VA") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        VA_lat = Number(job.lat);
        VA_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        VA_lat = Number(job.lat);
        VA_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        VA_lat = Number(job.lat);
        VA_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        VA_lat = Number(job.lat);
        VA_lon = Number(job.lon);
      }
    } else if (job.state == "WA") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        WA_lat = Number(job.lat);
        WA_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        WA_lat = Number(job.lat);
        WA_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        WA_lat = Number(job.lat);
        WA_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        WA_lat = Number(job.lat);
        WA_lon = Number(job.lon);
      }
    } else if (job.state == "WV") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        WV_lat = Number(job.lat);
        WV_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        WV_lat = Number(job.lat);
        WV_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        WV_lat = Number(job.lat);
        WV_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        WV_lat = Number(job.lat);
        WV_lon = Number(job.lon);
      }
    } else if (job.state == "WI") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        WI_lat = Number(job.lat);
        WI_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        WI_lat = Number(job.lat);
        WI_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        WI_lat = Number(job.lat);
        WI_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        WI_lat = Number(job.lat);
        WI_lon = Number(job.lon);
      }
    } else if (job.state == "WY") {
      if (job.job_title == "Data Analyst") {
        var DA_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DA_html_title = job.job_title
        WY_lat = Number(job.lat);
        WY_lon = Number(job.lon);
      } else if (job.job_title == "Data Scientist") {
        var DS_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DS_html_title = job.job_title
        WY_lat = Number(job.lat);
        WY_lon = Number(job.lon);
      } else if (job.job_title == "Data Engineer") {
        var DE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var DE_html_title = job.job_title
        WY_lat = Number(job.lat);
        WY_lon = Number(job.lon);
      } else if (job.job_title == "Machine Learning Engineer") {
        var MLE_title_fix = job.job_title.replace(" ", "_").toUpperCase()
        var MLE_html_title = job.job_title
        WY_lat = Number(job.lat);
        WY_lon = Number(job.lon);
      }
    }
  };

  for (var i = 0; i < avg_salary_json.length; i++) {
    var salary_row = avg_salary_json[i];
    //console.log(salary_row)
    if (salary_row.state == "AL") {
      if (salary_row.job_title == "Data Analyst") {
        var AL_DA_marker = L.marker([AL_lat, AL_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        AL_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var AL_DS_marker = L.marker([AL_lat, AL_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        AL_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var AL_DE_marker = L.marker([AL_lat, AL_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        AL_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var AL_MLE_marker = L.marker([AL_lat, AL_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        AL_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "AK") {
      if (salary_row.job_title == "Data Analyst") {
        var AK_DA_marker = L.marker([AK_lat, AK_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        AK_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var AK_DS_marker = L.marker([AK_lat, AK_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        AK_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var AK_DE_marker = L.marker([AK_lat, AK_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        AK_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var AK_MLE_marker = L.marker([AK_lat, AK_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        AK_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "AZ") {
      if (salary_row.job_title == "Data Analyst") {
        var AZ_DA_marker = L.marker([AZ_lat, AZ_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        AZ_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var AZ_DS_marker = L.marker([AZ_lat, AZ_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        AZ_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var AZ_DE_marker = L.marker([AZ_lat, AZ_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        AZ_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var AZ_MLE_marker = L.marker([AZ_lat, AZ_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        AZ_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "AR") {
      if (salary_row.job_title == "Data Analyst") {
        var AR_DA_marker = L.marker([AR_lat, AR_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        AR_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var AR_DS_marker = L.marker([AR_lat, AR_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        AR_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var AR_DE_marker = L.marker([AR_lat, AR_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        AR_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var AR_MLE_marker = L.marker([AR_lat, AR_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        AR_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "CA") {
      if (salary_row.job_title == "Data Analyst") {
        var CA_DA_marker = L.marker([CA_lat, CA_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        CA_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var CA_DS_marker = L.marker([CA_lat, CA_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        CA_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var CA_DE_marker = L.marker([CA_lat, CA_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        CA_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var CA_MLE_marker = L.marker([CA_lat, CA_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        CA_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "CO") {
      if (salary_row.job_title == "Data Analyst") {
        var CO_DA_marker = L.marker([CO_lat, CO_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        CO_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var CO_DS_marker = L.marker([CO_lat, CO_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        CO_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var CO_DE_marker = L.marker([CO_lat, CO_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        CO_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var CO_MLE_marker = L.marker([CO_lat, CO_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        CO_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "CT") {
      if (salary_row.job_title == "Data Analyst") {
        var CT_DA_marker = L.marker([CT_lat, CT_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        CT_DA_marker.addTo(layers[DA_title_fix]);

      } else if (salary_row.job_title == "Data Scientist") {
        var CT_DS_marker = L.marker([CT_lat, CT_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        CT_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var CT_DE_marker = L.marker([CT_lat, CT_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        CT_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var CT_MLE_marker = L.marker([CT_lat, CT_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        CT_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "DE") {
      if (salary_row.job_title == "Data Analyst") {
        var DE_DA_marker = L.marker([DE_lat, DE_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        DE_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var DE_DS_marker = L.marker([DE_lat, DE_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        DE_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var DE_DE_marker = L.marker([DE_lat, DE_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        DE_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var DE_MLE_marker = L.marker([DE_lat, DE_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        DE_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "DC") {
      if (salary_row.job_title == "Data Analyst") {
        var DC_DA_marker = L.marker([DC_lat, DC_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        DC_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var DC_DS_marker = L.marker([DC_lat, DC_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        DC_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var DC_DE_marker = L.marker([DC_lat, DC_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        DC_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var DC_MLE_marker = L.marker([DC_lat, DC_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        DC_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "FL") {
      if (salary_row.job_title == "Data Analyst") {
        var FL_DA_marker = L.marker([FL_lat, FL_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        FL_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var FL_DS_marker = L.marker([FL_lat, FL_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        FL_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var FL_DE_marker = L.marker([FL_lat, FL_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        FL_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var FL_MLE_marker = L.marker([FL_lat, FL_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        FL_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "GA") {
      if (salary_row.job_title == "Data Analyst") {
        var GA_DA_marker = L.marker([GA_lat, GA_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        GA_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var GA_DS_marker = L.marker([GA_lat, GA_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        GA_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var GA_DE_marker = L.marker([GA_lat, GA_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        GA_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var GA_MLE_marker = L.marker([GA_lat, GA_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        GA_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "HI") {
      if (salary_row.job_title == "Data Analyst") {
        var HI_DA_marker = L.marker([HI_lat, HI_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        HI_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var HI_DS_marker = L.marker([HI_lat, HI_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        HI_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var HI_DE_marker = L.marker([HI_lat, HI_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        HI_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var HI_MLE_marker = L.marker([HI_lat, HI_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        HI_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "ID") {
      if (salary_row.job_title == "Data Analyst") {
        var ID_DA_marker = L.marker([ID_lat, ID_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        ID_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var ID_DS_marker = L.marker([ID_lat, ID_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        ID_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var ID_DE_marker = L.marker([ID_lat, ID_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        ID_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var ID_MLE_marker = L.marker([ID_lat, ID_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        ID_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "IL") {
      if (salary_row.job_title == "Data Analyst") {
        var IL_DA_marker = L.marker([IL_lat, IL_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        IL_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var IL_DS_marker = L.marker([IL_lat, IL_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        IL_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var IL_DE_marker = L.marker([IL_lat, IL_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        IL_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var IL_MLE_marker = L.marker([IL_lat, IL_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        IL_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "IA") {
      if (salary_row.job_title == "Data Analyst") {
        var IA_DA_marker = L.marker([IA_lat, IA_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        IA_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var IA_DS_marker = L.marker([IA_lat, IA_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        IA_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var IA_DE_marker = L.marker([IA_lat, IA_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        IA_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var IA_MLE_marker = L.marker([IA_lat, IA_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        IA_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "KS") {
      if (salary_row.job_title == "Data Analyst") {
        var KS_DA_marker = L.marker([KS_lat, KS_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        KS_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var KS_DS_marker = L.marker([KS_lat, KS_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        KS_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var KS_DE_marker = L.marker([KS_lat, KS_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        KS_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var KS_MLE_marker = L.marker([KS_lat, KS_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        KS_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "KY") {
      if (salary_row.job_title == "Data Analyst") {
        var KY_DA_marker = L.marker([KY_lat, KY_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        KY_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var KY_DS_marker = L.marker([KY_lat, KY_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        KY_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var KY_DE_marker = L.marker([KY_lat, KY_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        KY_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var KY_MLE_marker = L.marker([KY_lat, KY_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        KY_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "LA") {
      if (salary_row.job_title == "Data Analyst") {
        var LA_DA_marker = L.marker([LA_lat, LA_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        LA_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var LA_DS_marker = L.marker([LA_lat, LA_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        LA_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var LA_DE_marker = L.marker([LA_lat, LA_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        LA_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var LA_MLE_marker = L.marker([LA_lat, LA_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        LA_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "ME") {
      if (salary_row.job_title == "Data Analyst") {
        var ME_DA_marker = L.marker([ME_lat, ME_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        ME_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var ME_DS_marker = L.marker([ME_lat, ME_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        ME_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var ME_DE_marker = L.marker([ME_lat, ME_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        ME_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var ME_MLE_marker = L.marker([ME_lat, ME_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        ME_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "MD") {
      if (salary_row.job_title == "Data Analyst") {
        var MD_DA_marker = L.marker([MD_lat, MD_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MD_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var MD_DS_marker = L.marker([MD_lat, MD_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MD_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var MD_DE_marker = L.marker([MD_lat, MD_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MD_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var MD_MLE_marker = L.marker([MD_lat, MD_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MD_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "MA") {
      if (salary_row.job_title == "Data Analyst") {
        var MA_DA_marker = L.marker([MA_lat, MA_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MA_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var MA_DS_marker = L.marker([MA_lat, MA_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MA_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var MA_DE_marker = L.marker([MA_lat, MA_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MA_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var MA_MLE_marker = L.marker([MA_lat, MA_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MA_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "MI") {
      if (salary_row.job_title == "Data Analyst") {
        var MI_DA_marker = L.marker([MI_lat, MI_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MI_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var MI_DS_marker = L.marker([MI_lat, MI_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MI_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var MI_DE_marker = L.marker([MI_lat, MI_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MI_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var MI_MLE_marker = L.marker([MI_lat, MI_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MI_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "MN") {
      if (salary_row.job_title == "Data Analyst") {
        var MN_DA_marker = L.marker([MN_lat, MN_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MN_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var MN_DS_marker = L.marker([MN_lat, MN_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MN_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var MN_DE_marker = L.marker([MN_lat, MN_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MN_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var MN_MLE_marker = L.marker([MN_lat, MN_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MN_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "MS") {
      if (salary_row.job_title == "Data Analyst") {
        var MS_DA_marker = L.marker([MS_lat, MS_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MS_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var MS_DS_marker = L.marker([MS_lat, MS_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MS_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var MS_DE_marker = L.marker([MS_lat, MS_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MS_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var MS_MLE_marker = L.marker([MS_lat, MS_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MS_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "MO") {
      if (salary_row.job_title == "Data Analyst") {
        var MO_DA_marker = L.marker([MO_lat, MO_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MO_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var MO_DS_marker = L.marker([MO_lat, MO_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MO_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var MO_DE_marker = L.marker([MO_lat, MO_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MO_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var MO_MLE_marker = L.marker([MO_lat, MO_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MO_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "MT") {
      if (salary_row.job_title == "Data Analyst") {
        var MT_DA_marker = L.marker([MT_lat, MT_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MT_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var MT_DS_marker = L.marker([MT_lat, MT_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MT_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var MT_DE_marker = L.marker([MT_lat, MT_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MT_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var MT_MLE_marker = L.marker([MT_lat, MT_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        MT_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "NE") {
      if (salary_row.job_title == "Data Analyst") {
        var NE_DA_marker = L.marker([NE_lat, NE_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NE_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var NE_DS_marker = L.marker([NE_lat, NE_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NE_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var NE_DE_marker = L.marker([NE_lat, NE_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NE_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var NE_MLE_marker = L.marker([NE_lat, NE_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NE_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "NV") {
      if (salary_row.job_title == "Data Analyst") {
        var NV_DA_marker = L.marker([NV_lat, NV_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NV_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var NV_DS_marker = L.marker([NV_lat, NV_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NV_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var NV_DE_marker = L.marker([NV_lat, NV_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NV_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var NV_MLE_marker = L.marker([NV_lat, NV_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NV_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "NH") {
      if (salary_row.job_title == "Data Analyst") {
        var NH_DA_marker = L.marker([NH_lat, NH_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NH_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var NH_DS_marker = L.marker([NH_lat, NH_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NH_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var NH_DE_marker = L.marker([NH_lat, NH_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NH_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var NH_MLE_marker = L.marker([NH_lat, NH_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NH_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "NJ") {
      if (salary_row.job_title == "Data Analyst") {
        var NJ_DA_marker = L.marker([NJ_lat, NJ_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NJ_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var NJ_DS_marker = L.marker([NJ_lat, NJ_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NJ_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var NJ_DE_marker = L.marker([NJ_lat, NJ_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NJ_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var NJ_MLE_marker = L.marker([NJ_lat, NJ_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NJ_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "NM") {
      if (salary_row.job_title == "Data Analyst") {
        var NM_DA_marker = L.marker([NM_lat, NM_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NM_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var NM_DS_marker = L.marker([NM_lat, NM_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NM_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var NM_DE_marker = L.marker([NM_lat, NM_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NM_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var NM_MLE_marker = L.marker([NM_lat, NM_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NM_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "NY") {
      if (salary_row.job_title == "Data Analyst") {
        var NY_DA_marker = L.marker([NY_lat, NY_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NY_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var NY_DS_marker = L.marker([NY_lat, NY_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NY_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var NY_DE_marker = L.marker([NY_lat, NY_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NY_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var NY_MLE_marker = L.marker([NY_lat, NY_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NY_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "NC") {
      if (salary_row.job_title == "Data Analyst") {
        var NC_DA_marker = L.marker([NC_lat, NC_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NC_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var NC_DS_marker = L.marker([NC_lat, NC_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NC_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var NC_DE_marker = L.marker([NC_lat, NC_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NC_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var NC_MLE_marker = L.marker([NC_lat, NC_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        NC_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "ND") {
      if (salary_row.job_title == "Data Analyst") {
        var ND_DA_marker = L.marker([ND_lat, ND_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        ND_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var ND_DS_marker = L.marker([ND_lat, ND_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        ND_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var ND_DE_marker = L.marker([ND_lat, ND_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        ND_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var ND_MLE_marker = L.marker([ND_lat, ND_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        ND_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "OH") {
      if (salary_row.job_title == "Data Analyst") {
        var OH_DA_marker = L.marker([OH_lat, OH_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        OH_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var OH_DS_marker = L.marker([OH_lat, OH_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        OH_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var OH_DE_marker = L.marker([OH_lat, OH_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        OH_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var OH_MLE_marker = L.marker([OH_lat, OH_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        OH_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "OK") {
      if (salary_row.job_title == "Data Analyst") {
        var OK_DA_marker = L.marker([OK_lat, OK_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        OK_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var OK_DS_marker = L.marker([OK_lat, OK_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        OK_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var OK_DE_marker = L.marker([OK_lat, OK_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        OK_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var OK_MLE_marker = L.marker([OK_lat, OK_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        OK_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "OR") {
      if (salary_row.job_title == "Data Analyst") {
        var OR_DA_marker = L.marker([OR_lat, OR_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        OR_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var OR_DS_marker = L.marker([OR_lat, OR_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        OR_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var OR_DE_marker = L.marker([OR_lat, OR_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        OR_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var OR_MLE_marker = L.marker([OR_lat, OR_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        OR_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "PA") {
      if (salary_row.job_title == "Data Analyst") {
        var PA_DA_marker = L.marker([PA_lat, PA_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        PA_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var PA_DS_marker = L.marker([PA_lat, PA_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        PA_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var PA_DE_marker = L.marker([PA_lat, PA_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        PA_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var PA_MLE_marker = L.marker([PA_lat, PA_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        PA_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "RI") {
      if (salary_row.job_title == "Data Analyst") {
        var RI_DA_marker = L.marker([RI_lat, RI_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        RI_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var RI_DS_marker = L.marker([RI_lat, RI_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        RI_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var RI_DE_marker = L.marker([RI_lat, RI_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        RI_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var RI_MLE_marker = L.marker([RI_lat, RI_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        RI_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "SC") {
      if (salary_row.job_title == "Data Analyst") {
        var SC_DA_marker = L.marker([SC_lat, SC_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        SC_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var SC_DS_marker = L.marker([SC_lat, SC_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        SC_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var SC_DE_marker = L.marker([SC_lat, SC_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        SC_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var SC_MLE_marker = L.marker([SC_lat, SC_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        SC_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "SD") {
      if (salary_row.job_title == "Data Analyst") {
        var SD_DA_marker = L.marker([SD_lat, SD_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        SD_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var SD_DS_marker = L.marker([SD_lat, SD_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        SD_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var SD_DE_marker = L.marker([SD_lat, SD_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        SD_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var SD_MLE_marker = L.marker([SD_lat, SD_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        SD_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "TN") {
      if (salary_row.job_title == "Data Analyst") {
        var TN_DA_marker = L.marker([TN_lat, TN_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        TN_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var TN_DS_marker = L.marker([TN_lat, TN_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        TN_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var TN_DE_marker = L.marker([TN_lat, TN_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        TN_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var TN_MLE_marker = L.marker([TN_lat, TN_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        TN_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "TX") {
      if (salary_row.job_title == "Data Analyst") {
        var TX_DA_marker = L.marker([TX_lat, TX_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        TX_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var TX_DS_marker = L.marker([TX_lat, TX_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        TX_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var TX_DE_marker = L.marker([TX_lat, TX_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        TX_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var TX_MLE_marker = L.marker([TX_lat, TX_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        TX_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "UT") {
      if (salary_row.job_title == "Data Analyst") {
        var UT_DA_marker = L.marker([UT_lat, UT_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        UT_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var UT_DS_marker = L.marker([UT_lat, UT_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        UT_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var UT_DE_marker = L.marker([UT_lat, UT_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        UT_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var UT_MLE_marker = L.marker([UT_lat, UT_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        UT_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "VT") {
      if (salary_row.job_title == "Data Analyst") {
        var VT_DA_marker = L.marker([VT_lat, VT_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        VT_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var VT_DS_marker = L.marker([VT_lat, VT_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        VT_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var VT_DE_marker = L.marker([VT_lat, VT_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        VT_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var VT_MLE_marker = L.marker([VT_lat, VT_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        VT_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "VA") {
      if (salary_row.job_title == "Data Analyst") {
        var VA_DA_marker = L.marker([VA_lat, VA_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        VA_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var VA_DS_marker = L.marker([VA_lat, VA_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        VA_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var VA_DE_marker = L.marker([VA_lat, VA_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        VA_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var VA_MLE_marker = L.marker([VA_lat, VA_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        VA_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "WA") {
      if (salary_row.job_title == "Data Analyst") {
        var WA_DA_marker = L.marker([WA_lat, WA_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        WA_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var WA_DS_marker = L.marker([WA_lat, WA_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        WA_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var WA_DE_marker = L.marker([WA_lat, WA_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        WA_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var WA_MLE_marker = L.marker([WA_lat, WA_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        WA_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "WV") {
      if (salary_row.job_title == "Data Analyst") {
        var WV_DA_marker = L.marker([WV_lat, WV_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        WV_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var WV_DS_marker = L.marker([WV_lat, WV_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        WV_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var WV_DE_marker = L.marker([WV_lat, WV_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        WV_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var WV_MLE_marker = L.marker([WV_lat, WV_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        WV_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "WI") {
      if (salary_row.job_title == "Data Analyst") {
        var WI_DA_marker = L.marker([WI_lat, WI_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        WI_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var WI_DS_marker = L.marker([WI_lat, WI_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        WI_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var WI_DE_marker = L.marker([WI_lat, WI_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        WI_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var WI_MLE_marker = L.marker([WI_lat, WI_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        WI_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else if (salary_row.state == "WY") {
      if (salary_row.job_title == "Data Analyst") {
        var WY_DA_marker = L.marker([WY_lat, WY_lon], {icon: greenIcon})
          .bindPopup("<h1>" + DA_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        WY_DA_marker.addTo(layers['DATA_ANALYST']);

      } else if (salary_row.job_title == "Data Scientist") {
        var WY_DS_marker = L.marker([WY_lat, WY_lon], {icon: redIcon})
          .bindPopup("<h1>" + DS_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        WY_DS_marker.addTo(layers['DATA_SCIENTIST']);

      } else if (salary_row.job_title == "Data Engineer") {
        var WY_DE_marker = L.marker([WY_lat, WY_lon], {icon: violetIcon})
          .bindPopup("<h1>" + DE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        WY_DE_marker.addTo(layers['DATA_ENGINEER']);

      } else if (salary_row.job_title == "Machine Learning Engineer") {
        var WY_MLE_marker = L.marker([WY_lat, WY_lon], {icon: goldIcon})
          .bindPopup("<h1>" + MLE_html_title + "</h1> <hr> <h3> State: " + salary_row.state + "</h3><h3>Avg Salary: " + Math.round(Number(salary_row.avg_salary)) + "K</h3>")

        // Add the new marker to the appropriate layer
        WY_MLE_marker.addTo(layers['MACHINE_LEARNING_ENGINEER']);

      }
    } else {
      console.log("done")
    }
  }

}