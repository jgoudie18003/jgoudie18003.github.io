
var requestURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=1712458fe634bfb44de4aeb2b8175957&units=imperial";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.send();

request.onload = function () {
    let weatherData = JSON.parse(request.responseText);
    console.log(weatherData);
    var tempF = weatherData.main.temp;
    var speed = weatherData.wind.speed;

    var windspeed = Math.pow(speed, 0.16);
    var outputDiv = 35.74 + 0.6215 * tempF - 35.75 * windspeed + 0.4275 * tempF * windspeed;
    outputDiv = Math.round(outputDiv);

    document.getElementById("current").innerHTML = weatherData.weather[0].description;
    document.getElementById("tempF").innerHTML = tempF + "°F";
    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
    document.getElementById("outputDiv").innerHTML = outputDiv + "°F";
    document.getElementById("speed").innerHTML = speed;

}

var weatherRequest = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=1712458fe634bfb44de4aeb2b8175957&units=imperial";
var forecast = new XMLHttpRequest();
forecast.open('GET', weatherRequest);
forecast.send();

forecast.onload = function () {
    let weatherData = JSON.parse(forecast.responseText);
    console.log(weatherData); 


}