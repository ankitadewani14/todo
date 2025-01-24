import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ location }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=46527e1ead2509166c526beb6b7ccab7&units=metric`
        );
        setWeather(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch weather");
        setLoading(false);
      }
    };

    if (location) {
      fetchWeather();
    }
  }, [location]);

  if (loading) return <div>Loading weather...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h4>Weather in {location}</h4>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
};

export default Weather;
