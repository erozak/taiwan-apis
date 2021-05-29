import type { SuccessResult } from '../models/Result';
import type { WeatherForecastWithGeoCoordinate } from '../models/WeatherForecast';

type NextWeekWeatherForecastByCityResult = SuccessResult<{
  /**
   * NOTE this always be len 1
   */
  locations: Array<{
    datasetDescription: string;
    dataid: string;
    locationsName: string;
    location: Array<WeatherForecastWithGeoCoordinate>;
  }>;
}>;
