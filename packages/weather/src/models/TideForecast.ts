import type { DateTime } from './Time';
import type { ParameterSet } from './ParameterSet';
import type { Duration } from './Duration';
import type { Observatory } from './Observatory';
import type { Location } from './Location';
import type { WeatherElementWithForecastItems } from './WeatherElementWithForecastItems';
import type { WeatherElementWithValue } from './WeatherElementWithValue';
import type { ForecastBase } from './ForecastBase';

export enum TidalParamName {
  TIDE_TYPE /*                */ = '潮汐',
  TAIWAN_VERTICAL_DATUM /*    */ = '潮高(TWVD)',
  MEAN_SEA_LEVEL /*           */ = '潮高(當地)',
  LOWEST_ASTRONOMICAL_TIDE /* */ = '潮高(相對海圖)',
}

export enum TidalRangeValue {
  MACRO /*    */ = '大',
  MESO /*     */ = '中',
  MICRO /*    */ = '小',
}

export enum TideTypeValue {
  HIGH_WATER /* */ = '滿潮',
  LOW_WATER /*  */ = '乾潮',
}

export enum TidalWeatherElementName {
  DAILY_TIDE /*      */ = '1日潮汐',
  TIDAL_RANGE /*     */ = '潮差',
  LUNAR_CANLENDAR /* */ = '農曆',
}

export interface TideForecastItem {
  dataTime: DateTime;
  parameter: ParameterSet[];
}

export type TideForecastWeatherElement =
  | WeatherElementWithValue
  | WeatherElementWithForecastItems<TideForecastItem>

export interface TideForecast
  extends Duration,
    ForecastBase<TideForecastWeatherElement> {}

export interface TideForecastInLocation
  extends Observatory, Location {
  validTime: TideForecast[];
}
