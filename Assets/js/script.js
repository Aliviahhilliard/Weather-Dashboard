// updateDate - Updates the current date using DAYJS
const updateDate = () => {
  const currentDate = dayjs().format('MMMM D, YYYY');
  document.getElementById('current-date').textContent = currentDate;
};

/**
 * getWeatherData - Fetch weather data for a given city
 * @param {string} city - City name
 */

// Function to fetch weather data for a given city using Fetch API
function getWeatherData(city) {
  const apiKey = 'faae1387f926a22107aa7707c37e99af';
    // const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q={city-name},{state-code},{country-code}&limit={limit}&appid={faae1387f926a22107aa7707c37e99af
//}`
  const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
// code from Weather-Dashboard/Assets/js/script.js: kept as comments for reference
// //var apiKey = 'faae1387f926a22107aa7707c37e99af';
// var city;
// var queryURL = `http://api.openweathermap.org/data/2.5/weather?q={city-name}&appid={faae1387f926a22107aa7707c37e99af}`;

// fetch(queryURL + city + apiKey)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });

fetch(queryURL)
.then(response => response.json())
.then(data => {
  displayCurrentWeather(data.current);
  displayForecast(data.forecast.forecastday);
  addToSearchHistory(city);
})
.catch(error => {
  console.error('Error:', error);
});
}

/**
 * displayCurrentWeather - Display current weather information
 * @param {Object} currentWeather - Current weather data
 */

// Code from Weather-Dashboard/Assets/js/script.js: kept as comments for reference
//     fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         // Display current weather conditions
//         displayCurrentWeather(data.current);

//         // Display future weather conditions
//         displayForecast(data.forecast.forecastday);
        
//         // Add the city to search history
//         addToSearchHistory(city);
// })
//     .catch(error => {
//         console.error('Error:', error);
//         // Handle error scenarios
//     });
// }
  // Function to display current weather conditions
  function displayCurrentWeather(currentWeather) {
    const currentWeatherDiv = document.getElementById('current-weather');
    const formattedDate = dayjs(currentWeather.last_updated).format('MMMM D, YYYY');
    
    currentWeatherDiv.innerHTML = `
      <h2>${currentWeather.condition.text}</h2>
      <p>Date: ${formattedDate}</p>
      <img src="${currentWeather.condition.icon}" alt="Weather Icon">
      <p>Temperature: ${currentWeather.temp_c}°C</p>
      <p>Humidity: ${currentWeather.humidity}%</p>
      <p>Wind Speed: ${currentWeather.wind_kph} km/h</p>
    `;
  }

  // Function to display future weather forecast
function displayForecast(forecast) {
    const forecastDiv = document.getElementById('forecast');
    let forecastHTML = '<h2>5-Day Forecast</h2>';

    forecast.forEach(day => {
    forecastHTML += `
        <div>
        <p>Date: ${day.date}</p>
        <img src="${day.day.condition.icon}" alt="Weather Icon">
        <p>Temperature: ${day.day.avgtemp_c}°C</p>
        <p>Humidity: ${day.day.avghumidity}%</p>
        <p>Wind Speed: ${day.day.maxwind_kph} km/h</p>
        </div>
    `;
    });

    forecastDiv.innerHTML = forecastHTML;
}

/**
 * populateFiveDayForecast - Populate 5-day forecast data
 * @param {Object} forecastData - 5-day forecast data
 */
function populateFiveDayForecast(forecastData) {
  $('#day1').html(/* Populate Day 1 data */);
  // ... so on for other days
}

/**
 * loadSearchHistory - Loads the search history to the dropdown
 */
function loadSearchHistory() {
  const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
  const searchHistoryElement = document.getElementById('search-history');
  searchHistoryElement.innerHTML = history.map(city => `<option value="${city}">${city}</option>`).join('');
}

/**
 * saveToSearchHistory - Saves the new city to the dropdown
 * @param {String} city - The city to be saved
 */
function saveToSearchHistory(city) {
  let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
  if (!history.includes(city)) {
    history.push(city);
    localStorage.setItem('searchHistory', JSON.stringify(history));
  }
  loadSearchHistory();
}

// Add event listener to handle option selection
document.getElementById('search-history').addEventListener('change', (event) => {
  const city = event.target.value;
  // Call the function that fetches the weather for that city
  fetchWeather(city);
});

// Call this function initially to load any existing history
loadSearchHistory();

  // Function to add a city to the search history
function addToSearchHistory(city) {
    const searchHistoryDiv = document.getElementById('search-history');
    const cityElement = document.createElement('p');
    cityElement.textContent = city;
    cityElement.classList.add('city');
    searchHistoryDiv.appendChild(cityElement);
}
// Code from Weather-Dashboard/Assets/js/script.js: kept as comments for reference
  // Event listener for the search button
// document.getElementById('search-button').addEventListener('click', () => {
//     const cityInput = document.getElementById('city-input');
//     // const city = document.getElementById('city-input').value;
//     const city = cityInput.value.trim();
//     //fetchWeather(city);
//     cityHistory.push(city);
//     localStorage.setItem('cityHistory', JSON.stringify(cityHistory));
    
//     if (city !== '') {
//     //Fetch weather data for the given city
//     getWeatherData(city);
//    // Clear the input field
//     cityInput.value = '';

// }});

  // Event listener for clicking a city in the search history
document.getElementById('search-history').addEventListener('click', (event) => {
    if (event.target.classList.contains('city')) {
    const city = event.target.textContent;
      // Fetch weather data for the selected city
    getWeatherData(city);
    }
});

// Initialize date
updateDate();

// Add event listener for the search button
document.getElementById('search-button').addEventListener('click', () => {
  const cityInput = document.getElementById('city-input');
  const city = cityInput.value.trim();
  
  if (city !== '') {
    getWeatherData(city);
    cityInput.value = '';
  }
});

