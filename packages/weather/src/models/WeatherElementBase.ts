import * as Arr from 'fp-ts/Array';
import type { Option } from 'fp-ts/Option';

export interface WeatherElementBase {
  elementName: string;
  description?: string;
}

export const matchWeatherElement = (name: string): (
  <T extends WeatherElementBase = WeatherElementBase>(source: T[]) => Option<T>
) => Arr.findFirst(el => el.elementName === name);
