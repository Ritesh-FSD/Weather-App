import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    const apiKey = 'f2553c2df47886dcddae9943811b79ce';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <label>
      Enter location:
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      </label>
      {weatherData && (
        <div>
          <p>Location: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Humidity: {weatherData.main.humidity} %</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
