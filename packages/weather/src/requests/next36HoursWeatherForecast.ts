import type { SuccessResult } from '../models/Result';
import type { WeatherForecast } from '../models/WeatherForecast';

export const NEXT_36_HOURS_FORECAST_RESOURCE_ID = 'F-C0032-001';

type Next36HoursWeatherForecastResult = SuccessResult<{
  datasetDescription: string;
  location: WeatherForecast[];
}>;
