import { pipe, flow } from 'fp-ts/function';
import type { Refinement } from 'fp-ts/Refinement';
import * as O from 'fp-ts/Option';
import * as E from 'fp-ts/Either';

import { ParseError } from '../errors/ParseError';
import * as Dto from '../dtos';

export const fromWeatherElement = <S extends Dto.WeatherElement>(
  name: string,
  refinement: Refinement<Dto.WeatherElement, S>,
  onNone: () => ParseError,
) => (params: Dto.WeatherElement[]): E.Either<ParseError, S> =>
  pipe(
    params,
    Dto.getWeatherElement(name),
    O.chain(flow(
      O.fromPredicate(refinement)
    )),
    E.fromOption(onNone)
  );
