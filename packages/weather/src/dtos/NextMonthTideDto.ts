import type { WeatherStationForecast } from './WeatherStationForecast';

export interface NextMonthTideDto {
  records: {
    dataid: string;
    note: string;
    location: WeatherStationForecast[];
  }
}
