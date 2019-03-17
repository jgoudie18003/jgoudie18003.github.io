
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

//FORCAST LOADING

var weatherForecast = new XMLHttpRequest()
weatherForecast.open(
  'GET',
  'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=05114d9b05fc90300235d8704185c770&units=imperial',
  true
)
weatherForecast.send()
weatherForecast.onload = function() {
  var weatherData = JSON.parse(weatherForecast.responseText)
  console.log(weatherData)

  //find date, temp and weather icon for 18:00:00 each day
  //adds each item to a seperate array to use for display

  var listDate = []
  var listTemp = []
  var listIconCode = []
  var weatherDesc = []

  for (i = 0; i < weatherData.list.length; ++i) {
    time = weatherData.list[i].dt_txt
    if (time.includes('18:00:00')) {
      //date
      var date = new Date(weatherData.list[i].dt * 1000)
      var month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      var weekDay = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednseday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
      var findDate =
        weekDay[date.getDay()] +
        '<br>' +
        month[date.getMonth()] +
        '<br>' +
        date.getDate()
      listDate.push(findDate)

      // Temp
      var temp = weatherData.list[i].main.temp
      var temp = Math.round(temp)
      listTemp.push(temp)

      // Icon
      let iconData =
        'https://openweathermap.org/img/w/' +
        weatherData.list[i].weather['0'].icon +
        '.png'
      listIconCode.push(iconData)

      let weatherDescAlt = weatherData.list[i].weather['0'].description
      weatherDesc.push(weatherDescAlt)
    }
    continue
  }

  // Load Forcast Date
  document.getElementById('day1').innerHTML = listDate[0]
  document.getElementById('day2').innerHTML = listDate[1]
  document.getElementById('day3').innerHTML = listDate[2]
  document.getElementById('day4').innerHTML = listDate[3]
  document.getElementById('day5').innerHTML = listDate[4]
  // Load weather icon
  document.getElementById('weatherIcon1').src = listIconCode[0]
  document.getElementById('weatherIcon2').src = listIconCode[1]
  document.getElementById('weatherIcon3').src = listIconCode[2]
  document.getElementById('weatherIcon4').src = listIconCode[3]
  document.getElementById('weatherIcon5').src = listIconCode[4]
  // load src data for icon
  document.getElementById('weatherIcon1').alt = weatherDesc[0]
  document.getElementById('weatherIcon2').alt = weatherDesc[1]
  document.getElementById('weatherIcon3').alt = weatherDesc[2]
  document.getElementById('weatherIcon4').alt = weatherDesc[3]
  document.getElementById('weatherIcon5').alt = weatherDesc[4]
  // load forcasted temperature
  document.getElementById('tempFive1').innerHTML = listTemp[0]
  document.getElementById('tempFive2').innerHTML = listTemp[1]
  document.getElementById('tempFive3').innerHTML = listTemp[2]
  document.getElementById('tempFive4').innerHTML = listTemp[3]
  document.getElementById('tempFive5').innerHTML = listTemp[4]
  //
}

/*var sendData = []
  for (i = 0; i < weatherForecast.length; i++) {
    sendData +=
      weatherForcast.listDate[i] +
      '<br>' +
      weatherForecast.listIconCode[i] +
      '<br>' +
      weatherForecast.listTemp[i] */
