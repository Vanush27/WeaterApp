import {WEATHER_API_KEY} from '@env';
import {baseUrl} from '../baseUrl';

const getWeatherViaLocation = async ({city_name}: TCityName) => {
  const {data} = await baseUrl.get(
    `/forecast?q=${city_name}&appid=${WEATHER_API_KEY}`,
  );
  return data;
};

export type TCityName = {
  city_name?: string;
};

export default getWeatherViaLocation;
