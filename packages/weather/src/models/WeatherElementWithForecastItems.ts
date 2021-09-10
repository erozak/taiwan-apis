import type { Refinement } from 'fp-ts/Refinement';

import type { WeatherElementBase } from './WeatherElementBase';

export interface WeatherElementWithForecastItems<I = unknown>
  extends WeatherElementBase {
  time: I[];
}

export const isWeatherElementWithForecastItems: Refinement<WeatherElementBase, WeatherElementWithForecastItems>
  = (source): source is WeatherElementWithForecastItems =>
    Reflect.has(source, 'time') && Array.isArray(Reflect.get(source, 'time'));
