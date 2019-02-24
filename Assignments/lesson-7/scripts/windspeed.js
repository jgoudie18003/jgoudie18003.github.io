function doInputOutput() { 
    var tempF = parseInt(document.getElementById("Temperature").value);
    var speed = parseInt(document.getElementById("Wind Speed").value);
    var result = windChill(tempF, speed); 
    
    document.getElementById("outputDiv").innerHTML = "The Wind Chill Feels Like " + result + "°F"; }
    
    function windChill(tempF, speed) {
    var windspeed = Math.pow(speed, 0.16);
    var feelslike = 35.74 + (0.6215 * tempF) - (35.75 * windspeed) + (0.4275 * tempF * windspeed);
    return feelslike.toFixed (1); }