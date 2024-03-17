import axios from 'axios';
import {CITY_API_KEY} from '@env';

export const listCountry = axios.create({
  method: 'GET',
  headers: {
    'X-Api-Key': CITY_API_KEY,
  },
});

export const getCitiesList = async (nameCity: string) => {
  return await listCountry
    .get(`https://api.api-ninjas.com/v1/city?name=${nameCity}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error, 'getCitiesList');
    });
};
