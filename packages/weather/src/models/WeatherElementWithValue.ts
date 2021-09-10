import type { Refinement } from 'fp-ts/Refinement';

import type { WeatherElementBase } from './WeatherElementBase';

export interface WeatherElementWithValue
  extends WeatherElementBase {
  elementValue: string;
}

export const isWeatherElementWithValue: Refinement<WeatherElementBase, WeatherElementWithValue>
  = (source): source is WeatherElementWithValue => Reflect.has(source, 'elementValue');
