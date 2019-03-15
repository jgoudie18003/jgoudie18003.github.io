var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var townsData = request.response;
    showTowns(townsData);
}

function showTowns(jsonObj) {
    var towns = jsonObj["towns"];

    for (var i = 0; i < towns.length; i++) {

        if (towns[i].name != "Preston") {

            var myArticle = document.createElement("article");
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myPara5 = document.createElement('p');
            var myPara6 = document.createElement('p');
            var myList = document.createElement('ul');

            myH2.textContent = towns[i].name;
            //myPara1.textContent = 'Town: ' + towns[i].name;
            myPara2.textContent = 'Motto: ' + towns[i].motto;
            myPara3.textContent = 'Year Founded: ' + towns[i].yearFounded;
            myPara4.textContent = 'Current Population: ' + towns[i].currentPopulation;
            myPara5.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
            myPara6.textContent = 'Events: ';

            var townEvents = towns[i].events;
            for (var j = 0; j < townEvents.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = townEvents[j];
                myList.appendChild(listItem);
            }

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myList);

            section.appendChild(myArticle);
        }
    }
}