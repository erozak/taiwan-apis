import { pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';
import * as E from 'fp-ts/Either';
import * as Arr from 'fp-ts/Array';
import * as IO from 'fp-ts/IO';

import { reverseProjectOf } from '../utils';
import { ParseError } from '../errors/ParseError';
import * as Dto from '../dtos';
import {
  TidalDatum,
  TideForecast,
  TidalDatumMeasure,
  TidalDatumMeasureCollection,
  TideType,
} from '../models';
import {
  TIDAL_DATUM_PARAM_NAME_MAP,
  TIDE_TYPE_VALUE_MAP
} from './constants';
import { toUtcDatetime } from './toUtcDatetime';
import { fromDataParamsAndProjectTo } from './fromDataParamsAndProjectTo';
import { toTidalDatumMeasure } from './toTidalDatumMeasure';

const toOptionTideType = fromDataParamsAndProjectTo(Dto.TidalParamName.TIDE_TYPE)(TIDE_TYPE_VALUE_MAP);

export function toTideForecast(
  source: Dto.WeatherElementTimeListItem,
): E.Either<ParseError, TideForecast> {
  return pipe(
    E.Do,
    E.bind('type', makeToTideType(source)),
    E.bind('datum', makeToTidalDatumMeasureCollection(source)),
    E.bind('datetime', () => toUtcDatetime(source.dataTime)),
  );
}

const makeToTideType = (
  source: Dto.WeatherElementTimeListItem,
): IO.IO<E.Either<ParseError, TideType>> => () =>
  pipe(
    source.parameter,
    toOptionTideType,
    E.fromOption(() => new ParseError({
      source,
      message: 'Cannot parse to TideForecast',
    })),
  );

const makeToTidalDatumMeasureCollection = (
  source: Dto.WeatherElementTimeListItem,
): IO.IO<E.Either<ParseError, TidalDatumMeasureCollection>> => () =>
  pipe(
    Object.values(TidalDatum),
    Arr.traverse(E.Applicative)(
      (value) =>
        pipe(
          value,
          reverseProjectOf(TIDAL_DATUM_PARAM_NAME_MAP),
          O.chain(name => pipe(
            source.parameter,
            Dto.getDataParam(name),
          )),
          O.match(
            (): E.Either<ParseError, TidalDatumMeasure | null> => E.right(null),
            toTidalDatumMeasure,
          ),
          E.map(measure => [value, measure] as const)
        ),
    ),
    E.map(Object.fromEntries),
  );
