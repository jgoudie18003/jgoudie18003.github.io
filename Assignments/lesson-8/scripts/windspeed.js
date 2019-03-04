    var tempF = parseInt(document.getElementById("tempF").innerHTML);
    var speed = parseInt(document.getElementById("speed").innerHTML);
    var result = windChill(tempF, speed); 
    
    document.getElementById("outputDiv").innerHTML = "The Wind Chill Feels Like " + result + "°F";
    
    var windspeed = Math.pow(speed, 0.16);
    var feelslike = 35.74 + (0.6215 * tempF) - (35.75 * windspeed) + (0.4275 * tempF * windspeed);
    return feelslike.toFixed (0);