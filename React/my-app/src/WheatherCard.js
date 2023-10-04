import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.css';

const WheatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log(position);
          try {
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1afd7d30510c71b714e874e2ef5deae2&units=metric`
            );
            setWeatherData(response.data);
          } catch (error) {
            setErrorMessage('Error fetching weather data.');
          }
        },
        (error) => {
          setErrorMessage('Error getting user location: ' + error.message);
        }
      );
    } else {
      setErrorMessage('Geolocation is not available in this browser.');
    }
  }, []);

  return (
    <div className="WheatherCard">
      <h1>Weather Forecast</h1>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : weatherData ? (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
        </div>
      ) : (
        <p>Fetching weather data...</p>
      )}
    </div>
  );
};

export default WheatherCard;
