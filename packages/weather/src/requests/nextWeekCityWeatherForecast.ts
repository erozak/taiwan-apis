import type {
  SuccessResult,
  WithDatasetId,
  LocationsDataset,
  ResultResourceWithId,
  LocationsDetailedWeatherForecastDataset
} from '../models';
import {
  NEXT_WEEK_CITY_WEATHER_FORECAST_RESOURCE_ID
} from '../constants';

export type NextWeekCityWeatherForecastDataset =
  LocationsDataset<WithDatasetId<LocationsDetailedWeatherForecastDataset>>;

export type NextWeekCityWeatherForecastResult = SuccessResult<
  NextWeekCityWeatherForecastDataset,
  ResultResourceWithId<typeof NEXT_WEEK_CITY_WEATHER_FORECAST_RESOURCE_ID>
>;
