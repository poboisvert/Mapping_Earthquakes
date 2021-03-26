// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid").setView([30.6213, -97.379], 5);

// Coordinates for each point to be used in the polyline.
let line = [
  [33.9416, -118.4085],
  [30.6213, -97.379],
  [43.6799, -79.6291],
  [40.7102, -73.9388],
];

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer(
  // satellite-streets-v11, streets-v11, etc light-v10
  "https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity: 0.5,
  dashArray: "10",
}).addTo(map);

// Styling
// https://leafletjs.com/examples/choropleth/
// https://docs.mapbox.com/mapbox-gl-js/example/setstyle/
