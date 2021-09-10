import type { WeatherElementBase } from './WeatherElementBase';

export interface ForecastBase<W extends WeatherElementBase = WeatherElementBase> {
  weatherElement: W[];
}
