import {WEATHER_API_KEY} from '@env';
import {baseUrl} from '../baseUrl';

const getWeatherViaLocation = async ({city_name, lang}: TCityName) => {
  const {data} = await baseUrl.get(
    `/forecast?q=${city_name}&lang=${lang}&appid=${WEATHER_API_KEY}`,
  );

  return data;
};

export type TCityName = {
  city_name?: string;
  lang?: string;
};

export default getWeatherViaLocation;
