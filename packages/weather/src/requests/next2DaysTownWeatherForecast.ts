import type {
  SuccessResult,
  WithDatasetId,
  ResultResourceWithId,
  LocationsDataset,
  LocationsDetailedWeatherForecastDataset,
} from '../models';

export type Next2DaysTownWeatherForecastDataset =
  LocationsDataset<WithDatasetId<LocationsDetailedWeatherForecastDataset>>;

export type Next2DaysTownWeatherForecastResult = SuccessResult<
  Next2DaysTownWeatherForecastDataset,
  ResultResourceWithId
>;
