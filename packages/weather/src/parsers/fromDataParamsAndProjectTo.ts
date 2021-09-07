import { pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';

import { projectOf } from '../utils';
import * as Dto from '../dtos';

export const fromDataParamsAndProjectTo = (name: string) =>
  <T, S extends string = string>(map: Record<S, T>) =>
  (params: Dto.DataParam[]): O.Option<T> => pipe(
    params,
    Dto.getDataParam(name),
    O.chain(param => pipe(
      param.parameterValue as S,
      projectOf(map)
    )),
  );
