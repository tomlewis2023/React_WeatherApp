import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import LoadingSpinner from './LoadingSpinner';



const WeatherDashboard = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const apiKey = 'befd984de4d3c050671d4eb935e6c660'; // Add your OpenWeatherMap API key here

  const fetchWeatherData = async () => {
    if (!city) return;
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    }
    setLoading(false);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`dashboard ${darkMode ? 'dark-mode' : ''}`}>
      <div className="controls">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeatherData}>Get Weather</button>
        <button onClick={handleDarkModeToggle}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {loading && <LoadingSpinner />}

      {error && <div className="error-message">{error}</div>}

      {weatherData && !loading && (
        <WeatherCard data={weatherData} />
      )}
    </div>
  );
};

export default WeatherDashboard;
