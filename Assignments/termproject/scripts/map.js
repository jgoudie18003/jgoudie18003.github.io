/*Map for Bethesda, Maryland*/
function myMap() {
    var mapProp = {
        center:new google.maps.LatLng(38.9816047, -77.1535963),
        zoom: 12,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp)
}