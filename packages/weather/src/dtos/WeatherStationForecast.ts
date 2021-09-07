import type { WeatherForecast } from './WeatherForecast';

export interface WeatherStationForecast {
  locationName: string;
  stationId: string;
  validTime: WeatherForecast[];
}
