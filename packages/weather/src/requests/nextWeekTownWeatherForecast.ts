import type {
  SuccessResult,
  ResultResourceWithId,
  WithDatasetId,
  LocationsDataset,
  LocationsDetailedWeatherForecastDataset,
} from '../models';

export type NextWeekTownWeatherForecastDataset =
  LocationsDataset<WithDatasetId<LocationsDetailedWeatherForecastDataset>>;

export type NextWeekTownWeatherForecastResult = SuccessResult<
  NextWeekTownWeatherForecastDataset,
  ResultResourceWithId
>;
