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

      // Parses out data

      var cityTitle = response.name;
      var todaysDate = dayjs();
      var weatherIcon = response.weather[0].icon;
      var cityTemp = response.main.temp;
      var cityHumidity = response.main.humidity;
      var cityWindSpeed = response.wind.speed;

      // Creates HTML elements

      var cityTitleEl = document.createElement("h2");
      var todaysDateEl = document.createElement("p");
      var weatherIconEl = document.createElement("img");
      var cityTempEl = document.createElement("p");
      var cityHumidityEl = document.createElement("p");
      var cityWindSpeedEl = document.createElement("p");

      // Adds content to elements

      cityTitleEl.textContent = cityTitle;
      todaysDateEl.textContent = todaysDate.format("MMM D, YYYY");
      weatherIconEl.src =
        "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
      cityTempEl.textContent = "Temp: " + cityTemp ;
      cityHumidityEl.textContent = "Humidity: " + cityHumidity;
      cityWindSpeedEl.textContent = "Wind Speed: " + cityWindSpeed + " mph";

      // Appends elements to currentWeather ID
      document
        .getElementById("currentWeather")
        .append(
          cityTitleEl,
          todaysDateEl,
          weatherIconEl,
          cityTempEl,
          cityHumidityEl,
          cityWindSpeedEl
        );
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

    for(var i = 0; i < 5; i++){

      // Parses out data

      var firstDayDate = response.list[i].dt_txt;
      var firstDayIcon = response.list[i].weather[0].icon;
      var firstDayTemp = response.list[i].main.temp;
      var firstDayHumidity = response.list[i].main.humidity;
      var firstDayWindSpeed = response.list[i].wind.speed;

      // Creates HTML elements

      var firstDayDateEl = document.createElement("p");
      var firstDayIconEl = document.createElement("img");
      var firstDayTempEl = document.createElement("p");
      var firstDayHumidityEl = document.createElement("p");
      var firstDayWindSpeedEl = document.createElement("p");

      // Adds content to elements

      firstDayDateEl.textContent = firstDayDate;
      firstDayIconEl.src =
        "https://openweathermap.org/img/wn/" + firstDayIcon + "@2x.png";
      firstDayTempEl.textContent = "Temp: " + firstDayTemp;
      firstDayHumidityEl.textContent = "Humidity: " + firstDayHumidity;
      firstDayWindSpeedEl.textContent = "Wind Speed: " + firstDayWindSpeed + " mph";

      // Appends elements to forecast ID
      document
        .getElementById("forecast")
        .append(
          firstDayDateEl,
          firstDayIconEl,
          firstDayTempEl,
          firstDayHumidityEl,
          firstDayWindSpeedEl
        );
}
    });
}

// Function that gets current and 5 day forecast
function start() {
  var textInput = cityText.value;
  getCoordinate(textInput);
  userWeather(textInput);
}

// Click event that uses user input to generate coordinates
searchButton.addEventListener("click", start);
