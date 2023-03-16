const apiKey = "KEY";

// Get elements from the DOM
const searchBar = document.querySelector("#search-bar");
const locationElement = document.querySelector(".location");
const weatherIcon = document.querySelector(".weather-icon");
const temperatureElement = document.querySelector(".temperature");
const futureDays = document.querySelector(".future-days");

// Default city
let city = "Stockholm";

// Function to get weather data from OpenWeatherMap API
const getWeatherData = async (city) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    return data;
};

// Function to get five days weather forecast data from OpenWeatherMap API
const getFiveDaysData = async (city) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    return data.list.filter((item) => item.dt_txt.includes("12:00:00"));
};

// Function to display weather data on the dashboard
const displayWeatherData = async () => {
    const weatherData = await getWeatherData(city);
    const fiveDaysData = await getFiveDaysData(city);

    // Update the dashboard with the weather data
    locationElement.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
    weatherIcon.setAttribute(
        "src",
        `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
    );
    temperatureElement.textContent = `${Math.round(
        weatherData.main.temp
    )}°C`;

    futureDays.innerHTML = "";
    fiveDaysData.forEach((day) => {
        const futureDay = document.createElement("div");
        futureDay.classList.add("future-day");
        futureDay.innerHTML = `
      <p>${day.dt_txt.split(" ")[0]}</p>
      <img src="https://openweathermap.org/img/w/${day.weather[0].icon}.png" alt="Weather Icon">
      <p>${Math.round(day.main.temp)}°C</p>
    `;
        futureDays.appendChild(futureDay);
    });
};

// Display weather data for the default city when the page loads
displayWeatherData();

// Add an event listener to the search bar input element
searchBar.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        city = searchBar.value;
        displayWeatherData();
        searchBar.value = "";
    }
});
