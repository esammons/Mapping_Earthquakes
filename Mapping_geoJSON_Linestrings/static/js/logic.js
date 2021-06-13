// Add console.log to check to see if our code is working
console.log("working")

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522,-118.2437],14);

// We create the tile layer that will be the background of our map.
//  Add a marker to the map for Los Angeles, California.
L.circle([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor:'#ffffa1'
 }).addTo(map);
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/torontoRoutes.json";

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});

// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}