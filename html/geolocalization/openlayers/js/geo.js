/*jslint
browser: true */

var ERRORS = [
    "Your browser does not support geolocalization",
    "Access denied to location",
    "Location not available",
    "El tiempo para obtener la posición expiró"
];

function show_map(position) {
    var coords = position.coords,
    layers = [
        new ol.layer.Tile({
            source: new ol.source.MapQuest({layer: 'osm'})
        })
    ],
    map = new ol.Map({
        target: 'map',
        layers: layers,
        view: new ol.View({
            center: ol.proj.fromLonLat([coords.longitude, coords.latitude]),
            zoom: 15
        })
    });
}


function handle_error(errorCode) {
    var code = errorCode &&  errorCode.code || 0,
        msg = ERRORS[code];
    console.log(msg || "Error code is: " + code);
}

window.onload = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(show_map, handle_error);
    } else {
        handle_error()
    }
}
