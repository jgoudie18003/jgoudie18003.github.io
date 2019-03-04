    var tempF = parseInt(document.getElementById("tempF").innerHTML);
    var speed = parseInt(document.getElementById("speed").innerHTML); 
    
    document.getElementById("outputDiv").innerHTML = "The Wind Chill Feels Like " + outputDiv + "°F";
    
    var windspeed = Math.pow(speed, 0.16);
    var outputDiv = 35.74 + (0.6215 * tempF) - (35.75 * windspeed) + (0.4275 * tempF * windspeed);
    return outputDiv.toFixed (0);