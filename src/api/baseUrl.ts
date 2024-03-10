import axios from 'axios';
const version = '2.5';

const weatherApiUrl = `https://api.openweathermap.org/data/${version}`;

export const baseUrl = axios.create({
  baseURL: weatherApiUrl,
});

// export const imageUrl = 'https://openweathermap.org/img/wn/';
