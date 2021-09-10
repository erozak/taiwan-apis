import type { UtcDatetime, LunarDate } from './Date';
import type { MeasureUnit } from './Measure';
import type { LocationName } from './Location';

export enum TidalDatum {
  TAIWAN_VERTICAL_DATUM = 'twvd',
  MEAN_SEA_LEVEL = 'msl',
  LOWEST_ASTRONOMICAL_TIDE = 'lat',
}

export enum TidalRange {
  MACRO = 'macro',
  MESO = 'meso',
  MICRO = 'micro',
}

export enum TideType {
  LOW_WATER = 'lowWater',
  HIGH_WATER = 'highWater',
}

export type TidalDatumMeasure = {
  value: number;
  unit: MeasureUnit;
}

export type TidalDatumMeasureCollection = Record<TidalDatum, TidalDatumMeasure | null>;

export interface TideForecast {
  datetime: UtcDatetime;
  type: TideType;
  datum: TidalDatumMeasureCollection;
}

export interface DailyTideForecast {
  startDatetime: UtcDatetime;
  endDatetime: UtcDatetime;
  range: TidalRange;
  lunarDate: LunarDate;
  forecasts: TideForecast[];
}

export interface TideForecastByStation {
  stationId: string;
  locationName: LocationName;
  dailyforecasts: DailyTideForecast[];
}
