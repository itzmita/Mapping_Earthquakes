// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);


// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
let line = [

    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [44.3832, -100.2968],
    [43.6777, -79.6248],
    [40.6413, -73.7781]

  ];

 // Define a symbol using SVG path notation, with an opacity of 1.
//  var lineSymbol = {
//     path: 'M 0,-1 0,1',
//     strokeOpacity: 1,
//     scale: 4
//   };

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
   color: "blue",
   weight: 4,
   opacity: 0.5,
   dashArray: [12,12]
//    icons: [{
//     icon: lineSymbol,
//     offset: '0',
//     repeat: '20px',
//     strokeOpacity: 1
//   }]
}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);