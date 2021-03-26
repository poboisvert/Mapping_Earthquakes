// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer(
  // satellite-streets-v11, streets-v11, etc light-v10 dark-v10
  "https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);
// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark,
};

// Create the map object with center, zoom level and default layer.
let map = L.map("mapid", {
  center: [30, 30],
  zoom: 2,
  layers: [dark], // Select the theme dark or streets
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);
// Accessing the airport GeoJSON URL
// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods =
  "https://raw.githubusercontent.com/poboisvert/Mapping_Earthquakes/main/torontoNeighborhoods.json";
//console.log(airportData);

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function (data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    style: {
      color: "#ffffa1",
      weight: 2,
    },
    onEachFeature: function (feature, layer) {
      console.log(layer);
      layer.bindPopup(
        "<h3>Airline: " +
          layer.feature.properties.airline +
          "</h3><hr><h3>Destination: " +
          layer.feature.properties.dst +
          "</h3>"
      );
    },
  }).addTo(map);
});
