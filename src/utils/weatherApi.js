import axios from 'axios';

const API_KEY = '46527e1ead2509166c526beb6b7ccab7'; // Replace with your API Key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data
export const fetchWeather = async (location) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: location,
        appid: API_KEY,
        units: 'metric', // Metric units for temperature in Celsius
      },
    });
    return response.data; // Return weather data
  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
};
