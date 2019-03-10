    var tempF = parseInt(document.getElementById("tempF").innerHTML);
    var speed = parseInt(document.getElementById("speed").innerHTML); 
    
    var windspeed = Math.pow(speed, 0.16);
    var outputDiv = 35.74 + 0.6215 * tempF - 35.75 * windspeed + 0.4275 * tempF * windspeed;
    outputDiv = Math.round(outputDiv);

    document.getElementById("outputDiv").innerHTML = outputDiv + "°F";