import type { WeatherEelement } from './WeatherElement';
import type { GeoCoordinate } from './GeoCoordinate';

export interface WeatherForecast {
  locationName: string;
  weatherElement: WeatherEelement[];
}

export type WeatherForecastWithGeoCoordinate = GeoCoordinate & WeatherForecast;
