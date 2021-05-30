import type { SuccessResult } from '../models/Result';
import type { TideForecast } from '../models/TideForecast';
import type { LocationDataWithId } from '../models/Data';

type NextMonthTideForecastResult = SuccessResult<LocationDataWithId<TideForecast.Station>>;
