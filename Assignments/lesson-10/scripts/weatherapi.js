var section = document.getElementById("weatherapi");
var requestURL = "https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={1712458fe634bfb44de4aeb2b8175957}";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

{
    "coord": {
        "lon": 145.77,
            "lat": -16.92
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
        }
    ],
        "base": "stations",
            "main": {
        "temp": 300.15,
            "pressure": 1007,
                "humidity": 74,
                    "temp_min": 300.15,
                        "temp_max": 300.15
    },
    "visibility": 10000,
        "wind": {
        "speed": 3.6,
            "deg": 160
    },
    "clouds": {
        "all": 40
    },
    "dt": 1485790200,
        "sys": {
        "type": 1,
            "id": 8166,
                "message": 0.2064,
                    "country": "AU",
                        "sunrise": 1485720272,
                            "sunset": 1485766550
    },
    "id": 2172797,
        "name": "Cairns",
            "cod": 200
}