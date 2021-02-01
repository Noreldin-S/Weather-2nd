let weather = {
  apiKey: "2eccd642d5b97f98197fd1db39c19b43",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },  
  displayWeather: function(data) {
  const { speed } = data.wind;
  
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
 
  document.querySelector(".city").innerText = "Weather in " + name;
  document.querySelector(".temp").innerText = temp + "°C";
  document.querySelector(".humidity").innerText =
  
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = temp + "°C";
  document.querySelector(".humidity").innerText =
    "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText =
    "Wind speed: " + speed + " km/h";
  document.querySelector(".weather").classList.remove("loading");
},
search: function () {
  this.fetchWeather(document.querySelector(".search-bar").value);
},
};
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Denver");