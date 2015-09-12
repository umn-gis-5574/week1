/**
 * Created by Jeff Reinhart on 9/12/2015.
 */
// Create a function for loading the map. This cannot run until the page has loaded.
// In the master version, this runs AFTER the map container div has been created,
// so use the window.onload function at the bottom of the script to prevent this
// code from running until after the page has loaded and the map container is available.
function loadMap(){
    // first, create the map object supplying it with the id of the html element
    // that should contain it
    var map = L.map('map-container');

    // tell the map where it's center is [latitude, longitude] and what
    // zoom level to start at (1 being waaaaay out, and 18 being basically street level)
    map.setView([45.592239, -94.166370], 14);

    // create our basemap layer and add it to the map
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(map);

    // add a marker at Blegen Hall and attach a popup with some content to it
    // that will open when the marker is clicked.
    L.marker([45.592239, -94.166370]).addTo(map)
        .bindPopup("<div class='popup-text'><strong>Sauk Rapids, MN</strong><br>Home of the <a href='http://www.oldcapitaltavern.com/'>Old Capital Tavern</a>,<br>maker of the best Reuben you'll ever have.</div>")
        .openPopup(); //openPopup means that the popup will be opened initially when the map loads.
} // end loadMap

window.onload = function() {
    loadMap();
};