import axios from 'axios';

const API_KEY = '5304e168378aa74b2179eb39fd9337c3';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?q=london,us&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(cityName) {
  console.log({where : 'city name',
    cityName
});
  const url = `http://samples.openweathermap.org/data/2.5/forecast?q=${cityName},us&appid=${API_KEY}`;
  const request = axios.get(url)
  return {
    type : FETCH_WEATHER,
    payload : request
  };
}
