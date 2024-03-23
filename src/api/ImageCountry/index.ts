import axios from 'axios';

const imageCountryApiUrl = 'https://api.teleport.org/api/urban_areas/';

export const imageCountryUrl = axios.create({
  baseURL: imageCountryApiUrl,
});

const getImageCountry = async (city_name: string) => {
  try {
    const changeName = city_name?.toLowerCase();
    const data = await imageCountryUrl.get(`slug:${changeName}/images/`);

    console.log(data, 'datadatadata');
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default getImageCountry;
