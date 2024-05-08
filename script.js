let apiKey = "e0f99c494c2ce394a18cc2fd3f100543";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let searchBox = document.querySelector(".search input");
let searchButton = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
  
    document.querySelector(".city").innerHTML = data.name; // Corrected from data.main.city to data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    if (data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "images/mist.png";
    } else if(data.weather[0].main=== "Snow"){
        weatherIcon.src = "images/snow.png";
    }
    else {
        weatherIcon.src = ""; // Set a default image or handle the case when weather is not one of the specified types
    }
    document.querySelector(".weather").style.display = "block";
}

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
