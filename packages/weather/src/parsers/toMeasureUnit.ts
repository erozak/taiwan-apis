import { pipe } from 'fp-ts/function';
import * as E from 'fp-ts/Either';

import type { MeasureUnit } from '../models';
import { ParseError } from '../errors/ParseError';
import { isInMeasureUnit } from '../models';

export function toMeasureUnit(source: unknown): E.Either<ParseError, MeasureUnit> {
  return pipe(
    source,
    E.fromPredicate(
      isInMeasureUnit,
      () => new ParseError({
        source,
        message: 'Cannot parse to MeasureUnit'
      })
    )
  )
}
