# Weather Dashboard

## Overview

Weather Dashboard is a web application built to provide current and 5-day weather forecasts based on city searches. It's a developer-friendly application that employs server-side APIs for data retrieval, and incorporates modern HTML, CSS, and JavaScript technologies.

## Features

- **City Search**: Type in a city name to get immediate weather updates.
- **5-Day Forecast**: View a detailed 5-day forecast, complete with weather icons, temperature, wind speed, and humidity.
- **Search History**: Recent city searches are saved and can be easily revisited with a dropdown menu.
- **Dynamic UI**: The interface updates dynamically based on API data and user interaction.
- **Persistent Data**: Utilizes `localStorage` to save search history.

## Technical Details

### API Usage

We are using the [5 Day Weather Forecast API](https://openweathermap.org/forecast5) from OpenWeather. API requests are made by passing the latitude and longitude of the city, which are initially obtained using another API that converts city names to coordinates.

**API Base URL**: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`

### Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap
- OpenWeather API

### Local Storage

The application uses the `localStorage` API for persistent storage of recent city searches.

## User Stories Met

- Users can search for any city and view its current and 5-day weather forecast.
- The recent searches are saved in a dropdown for quick future reference.
- The UI is intuitive, featuring dynamic updates of all components.

## Deployment

The application is fully deployed and can be accessed through [this live URL](#).

## Repository Standards

The repository adheres to best practices:
  - Descriptive commit messages
  - Proper file structure and naming conventions
  - Quality comments within the code
  - A comprehensive README file

## Screenshots

![Weather Dashboard UI](./Assets/weather-dashboard-ui.png)

## Links

- [Deployed Application](#)
- [GitHub Repository](#)

---

&copy; 2023 Aliviah Hilliard. All rights reserved.
