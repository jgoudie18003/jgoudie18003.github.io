//Weather Summary Data//

var requestURL = "https://api.openweathermap.org/data/2.5/weather?id=4188985&APPID=1712458fe634bfb44de4aeb2b8175957&units=imperial";
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

//FORECAST
var weatherForecast = new XMLHttpRequest
weatherForecast.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=4188985&APPID=1712458fe634bfb44de4aeb2b8175957&units=imperial', true);
weatherForecast.send();
weatherForecast.onload = function () {

    var weatherInfo = JSON.parse(weatherForecast.responseText);
    console.log(weatherInfo);

    //find date, temp and weather icon for 18:00:00 each day
    //adds each item to a separate array to use for display
    var listDate = [];
    var listTemp = [];
    var listIconCode = [];

    for (i = 0; i < weatherInfo.list.length; ++i) {
        time = weatherInfo.list[i].dt_txt;
        if (time.includes("18:00:00")) {

            //date
            var date = new Date(weatherInfo.list[i].dt * 1000);
            var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
            var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            var findDate = weekday[date.getDay()] + '<br>' + month[date.getMonth()] + ' ' + date.getDate();
            listDate.push(findDate);

            //temp
            var temp = weatherInfo.list[i].main.temp_max;
            var temp = Math.round(temp);
            listTemp.push(temp);

            //icon
            var iconcode = weatherInfo.list[i].weather["0"].icon;
            var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
            listIconCode.push(icon_path);
        }
        continue;
    }

    //Display forecast date
    document.getElementById('day1').innerHTML = listDate[0];
    document.getElementById('day2').innerHTML = listDate[1];
    document.getElementById('day3').innerHTML = listDate[2];
    document.getElementById('day4').innerHTML = listDate[3];
    document.getElementById('day5').innerHTML = listDate[4];
    //Display corresponding weather icon
    document.getElementById('weather_icon1').src = listIconCode[0];
    document.getElementById('weather_icon2').src = listIconCode[1];
    document.getElementById('weather_icon3').src = listIconCode[2];
    document.getElementById('weather_icon4').src = listIconCode[3];
    document.getElementById('weather_icon5').src = listIconCode[4];
    //Display forecasted temperature
    document.getElementById("highTemp1").innerHTML = listTemp[0];
    document.getElementById("highTemp2").innerHTML = listTemp[1];
    document.getElementById("highTemp3").innerHTML = listTemp[2];
    document.getElementById("highTemp4").innerHTML = listTemp[3];
    document.getElementById("highTemp5").innerHTML = listTemp[4];

}
