/*Map for Preston*/
function myMap() {
    var mapProp = {
        center:new google.maps.LatLng(42.1111605, -111.8410790),
        zoom: 12,
    };
    var map = new google.maps.MAP(document.getElementById("googleMap"), mapProp)
}