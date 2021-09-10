import type { WeatherElementWithForecastItems } from './WeatherElementWithForecastItems';
import type { WeatherElementWithValue } from './WeatherElementWithValue';

export type WeatherElement<I = unknown> =
  | WeatherElementWithForecastItems<I>
  | WeatherElementWithValue
