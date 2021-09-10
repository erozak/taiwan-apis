import type {
  SuccessResult,
  ResultResourceWithId,
  LocationWeatherForecastDataset
} from '../models';

const NEXT_36_HOURS_CITY_WEATHER_FORECAST_RESOURCE_ID = 'F-C0032-001';

export type Next36HoursCityWeatherForecastDataset = LocationWeatherForecastDataset;

export type Next36HoursCityWeatherForecastResult = SuccessResult<
  Next36HoursCityWeatherForecastDataset,
  ResultResourceWithId<typeof NEXT_36_HOURS_CITY_WEATHER_FORECAST_RESOURCE_ID>
>;
