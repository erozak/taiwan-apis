import { pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';
import * as E from 'fp-ts/Either';

import type * as Dto from '../dtos';
import type { TidalDatumMeasure } from '../models';
import { fromStringToNumber } from '../utils';
import { ParseError, changeSource } from '../errors/ParseError';
import { toMeasureUnit } from './toMeasureUnit';

export function toTidalDatumMeasure(
  source: Dto.DataParamLike,
): E.Either<ParseError, TidalDatumMeasure> {
  return pipe(
    E.Do,
    E.bind('unit', () => pipe(
      source.parameterMeasure,
      toMeasureUnit,
      E.mapLeft(changeSource(source)),
    )),
    E.bind('value', () => pipe(
      source.parameterValue,
      fromStringToNumber,
      E.fromNullable(new ParseError({
        source,
        message: 'Cannot parse to TidalDatumMeasure'
      }))
    ))
  )
}
