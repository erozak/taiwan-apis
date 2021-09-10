import type {
  SuccessResult,
  TideForecastInLocation,
  WithDatasetId,
  LocationDataset,
  ResultResourceWithId,
} from '../models';

const NEXT_MONTH_TIDE_FORECAST_RESOURCE_ID = 'F-A0021-001';

export type NextMonthTideForecastDataset =
  WithDatasetId<LocationDataset<TideForecastInLocation>>;

export type NextMonthTideForecastResult = SuccessResult<
  NextMonthTideForecastDataset,
  ResultResourceWithId<typeof NEXT_MONTH_TIDE_FORECAST_RESOURCE_ID>
>;
