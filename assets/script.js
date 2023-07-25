const apiKey = "5fd4a8f8e99d3f5261874c1f8fe806e3";

var cityText = document.getElementById("city-input");
var searchButton = document.getElementById("search-btn");

// Function that gets current weather
function getCoordinate(cityName) {
    var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    apiKey +
    "&units=imperial";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      console.log(response.main.temp);
    
      // Parse out data 
      
      var cityTitle = response.name  
      var cityTemp = response.main.temp
      var cityHumidity = response.main.humidity
      var cityWindSpeed = response.wind.speed

    //  Create HTML elements, add data, append 

    var cityTitleEl =  document.createElement('h2')
    var cityTempEl = document.createElement('p')
    var cityHumidityEl = document.createElement('p')
    var cityWindSpeedEl = document.createElement('p')

    cityTitleEl.textContent = cityTitle
    cityTempEl.textContent = 'Temp: ' + cityTemp
    cityHumidityEl.textContent = 'Humidity: ' + cityHumidity
    cityWindSpeedEl.textContent = 'Wind Speed: ' + cityWindSpeed


    document.getElementById('currentWeather').append(cityTitleEl, cityTempEl, cityHumidityEl, cityWindSpeedEl)
    });
}

// Function that generates 5 day forecast
function userWeather(cityName) {
  var url =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&appid=" +
    apiKey +
    "&units=imperial";
  fetch(url)
    .then((response) => {

      return response.json();
    })
    .then((response) => {
      console.log(response);
    });
}

// Function that gets current and 5 day forecast
function start(){
     var textInput = cityText.value;
  getCoordinate(textInput);
  userWeather(textInput)
}

// Click event that uses user input to generate coordinates
searchButton.addEventListener("click", start);
