import type { GeoCoordinateWithCode } from './GeoCoordinate';
import type { Location } from './Location';
import type { Locations } from './Locations';
import type { Duration } from './Duration';
import type { Measure } from './Measure';
import type { ParameterSetWithUnit } from './ParameterSetWithUnit';
import type { WeatherElementWithForecastItems } from './WeatherElementWithForecastItems';
import type { ForecastBase } from './ForecastBase';
import type { LocationDataset } from './Dataset';

export enum WeatherParamName {
  WX = 'Wx',
  POP = 'PoP',
  POP_12H = 'PoP12h',
  MINIMUM_TEMPERATURE = 'MinT',
  MAXIMUM_TEMPERATURE = 'MaxT',
  COMFORT_INFORMATION = 'CI',
}


export enum WeatherWeatherElementName {
  DESCRIPTION = 'WeatherDescription',
}

export interface WeatherForecastItemParameterSetVariant
  extends Duration {
  parameter: ParameterSetWithUnit;
}


export interface WeatherForecastItemElementVariant
  extends Duration {
  elementValue: Measure[];
}

export type WeatherForecastWeatherElement<I = unknown> = WeatherElementWithForecastItems<I>;

export interface WeatherForecastBase<I = unknown>
  extends Location, ForecastBase<WeatherForecastWeatherElement<I>> {}


export type WeatherForecastParameterSetVariant =
  WeatherForecastBase<WeatherForecastItemParameterSetVariant>


export interface DetailedWeatherForecastElementVariant
  extends GeoCoordinateWithCode,
    WeatherForecastBase<WeatherForecastItemElementVariant> {}

export type LocationWeatherForecastDataset = LocationDataset<WeatherForecastParameterSetVariant>;

export interface LocationsDetailedWeatherForecastDataset
  extends Locations,
  LocationDataset<DetailedWeatherForecastElementVariant> {}
