import { pipe } from 'fp-ts/function';
import * as Arr from 'fp-ts/Array';
import * as O from 'fp-ts/Option';

import type { DateTime } from './Date';
import type { DataParam } from './DataParam';

export interface WeatherElementBase {
  elementName: string;
}

export interface WeatherElementSingleValueVariant
  extends WeatherElementBase {
  elementValue: string;
}

export interface WeatherElementTimeListItem {
  dataTime: DateTime,
  parameter: DataParam[];
}

export interface WeatherElementTimeListVariant
  extends WeatherElementBase {
  time: WeatherElementTimeListItem[];
}


export type WeatherElement =
| WeatherElementSingleValueVariant
| WeatherElementTimeListVariant;

export function isSingleValueVariant(
  source: WeatherElement
): source is WeatherElementSingleValueVariant {
  return 'elementValue' in source && typeof source.elementValue === 'string';
}

export function isTimeListVariant(
  source: WeatherElement
): source is WeatherElementTimeListVariant {
  return 'time' in source && Array.isArray(source.time);
}

export function getWeatherElement(
  name: string,
): <T extends WeatherElementBase = WeatherElement>(source: T[]) => O.Option<T> {
  return source => pipe(
    source,
    Arr.findFirst(el => el.elementName === name)
  );
}
