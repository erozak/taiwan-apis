import type { SuccessResult } from './Result';
import type { WeatherStationForecast } from './WeatherStationForecast';

export type NextMonthTideDto = SuccessResult<{
  dataid: string;
  note: string;
  location: WeatherStationForecast[];
}>;
