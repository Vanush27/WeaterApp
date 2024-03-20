import {CELSIUS_TEMP} from '@constants';

export function kelvinToCelsius(num: number) {
  return Math.round(num - 273.15) + ' ' + CELSIUS_TEMP;
}

export function celsiusToFahrenheit(c: number) {
  return Math.round(c * (9 / 5) + 32);
}

export function fahrenheitToCelsius(f: number) {
  return Math.round(((f - 32) * 5) / 9);
}

export function kelvinToCelsiusDaily(num: number) {
  return Math.round(num - 273.15);
}
