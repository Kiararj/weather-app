const apiKey = '5fd4a8f8e99d3f5261874c1f8fe806e3';

var cityText = document.getElementById('city-input');
var searchButton = document.getElementById('search-btn');

function getCoordinate(coordinateApi) {
    fetch(coordinateApi)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        userWeather(response[0].lat,response[0].lon)

    })
}

function userWeather(lat,lon){
    var weatherApi = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon' + lon + '&appid=' + apiKey + '&units=imperial'
    fetch(weatherApi)
    .then((response) => {

return response.json();
    })
.then((response) => {
console.log(response);
});
}

searchButton.addEventListener('click', function () {
    var textInput = cityText.value
    var coordinateApi = 'https://api.openweathermap.org/geo/1.0/direct?q=' + textInput 
    getCoordinate(coordinateApi)
});
