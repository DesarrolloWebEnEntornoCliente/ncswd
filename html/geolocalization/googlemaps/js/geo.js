/*jslint
  browser: true */

var ERRORS = [
    "Your browser does not support geolocalization",
    "Access denied to location",
    "Location not available",
    "El tiempo para obtener la posición expiró"
];

function show_map(pos) {
    var coords = pos.coords,
        contenedor = document.getElementById("map");
    
    var centro = new google.maps.LatLng(coords.latitude, coords.longitude);
    
    var propiedades = {
    zoom: 15,
    center: centro,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(contenedor, propiedades);
    var marcador = new google.maps.Marker({
    position: centro,
    map: map,
    title: "Your current position"
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
