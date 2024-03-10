export type TWeatherItem = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export interface IListWeather {
  clouds: {all: number};
  dt: number;
  dt_txt: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  sys: {pod: string};
  visibility: number;
  weather: TWeatherItem[];
  wind: {speed: number; deg: number; gust: number};
}

export interface ICountryListWeather {
  city: {
    id: number;
    name: string;
    coord: {lat: number; lon: number};
    country: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: string;
  message: number;
  list: IListWeather[];
}
