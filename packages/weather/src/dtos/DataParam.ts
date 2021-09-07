import { pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';
import * as Arr from 'fp-ts/Array';

export interface DataParamBase {
  parameterName: string;
  parameterValue: string;
}

export interface DataParamLike
  extends DataParamBase {
  parameterMeasure?: string;
}

export interface DataParamWithMeasure
  extends DataParamBase {
  parameterMeasure: string;
}

export type DataParam =
  | DataParamWithMeasure
  | DataParamBase;

export function getDataParam(
  name: string,
): <T extends DataParamBase = DataParam>(source: T[]) => O.Option<T> {
  return source => pipe(
    source,
    Arr.findFirst(param => param.parameterName === name)
  );
}
