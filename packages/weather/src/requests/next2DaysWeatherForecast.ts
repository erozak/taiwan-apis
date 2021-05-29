import type { SuccessResult } from '../models/Result';
import type { WeatherForecastWithGeoCoordinate } from '../models/WeatherForecast';

const TAIPEI_CITY_RESOURCE_ID = 'F-D0047-061';

type Next2DaysWeatherForecastByCityResult = SuccessResult<{
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
