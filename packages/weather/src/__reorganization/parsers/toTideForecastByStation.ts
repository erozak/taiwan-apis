import { pipe } from 'fp-ts/function';
import * as E from 'fp-ts/Either';
import * as Arr from 'fp-ts/Array';

import { ParseError } from '../errors/ParseError';
import type * as Dto from '../dtos';
import type { TideForecastByStation } from '../models';
import { toDailyTideForecast } from './toDailyTideForecast';

export function toTideForecastByStation(
  source: Dto.WeatherStationForecast,
): E.Either<ParseError, TideForecastByStation> {
  return pipe(
    E.Do,
    E.bind('stationId', () => E.right(source.stationId)),
    E.bind('locationName', () => E.right(source.locationName)),
    E.bind('dailyforecasts', () => pipe(
      source.validTime,
      Arr.traverse(E.Applicative)(toDailyTideForecast)
    ))
  );
}
