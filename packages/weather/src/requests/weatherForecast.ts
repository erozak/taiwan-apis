import type {
  SuccessResult,
  TideForecastInLocation,
  WithDatasetId,
  LocationsDataset,
} from '../models';

const FORECAST_RESOURCE_ID = 'F-D0047-093';

export type WeatherForecastDataset =
  LocationsDataset<WithDatasetId<TideForecastInLocation>>

export type WeatherForecastResult = SuccessResult<
  WeatherForecastDataset
>;
