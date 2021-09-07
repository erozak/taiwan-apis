import { pipe } from 'fp-ts/function';
import * as E from 'fp-ts/Either';
import * as IO from 'fp-ts/IO';

import type { ParseError } from '../errors/ParseError';
import type * as Dto from '../dtos';
import type { UtcDatetime } from '../models';

export function toUtcDatetime(source: Dto.DateTime): E.Either<ParseError, UtcDatetime> {
  const [date, time] = source.split(' ');

  return pipe(
    `${date}T${time}+08:00`,
    E.right,
  );
}

export const makeToUtcDatetime= (
  source: Dto.DateTime,
): IO.IO<E.Either<ParseError, UtcDatetime>> => () => toUtcDatetime(source);
