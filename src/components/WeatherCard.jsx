import React from 'react';
import { WiHumidity, WiStrongWind, WiThermometer, WiDaySunny } from 'react-icons/wi';

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;
  
  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <div className="weather-info">
        <div>
          <WiThermometer size={40} />
          <span>{main.temp}°C</span>
        </div>
        <div>
          <WiDaySunny size={40} />
          <span>{weather[0].description}</span>
        </div>
        <div>
          <WiHumidity size={40} />
          <span>Humidity: {main.humidity}%</span>
        </div>
        <div>
          <WiStrongWind size={40} />
          <span>Wind: {wind.speed} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
