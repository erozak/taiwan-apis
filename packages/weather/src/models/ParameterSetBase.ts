import type { Option } from 'fp-ts/Option';
import * as Arr from 'fp-ts/Array';

export interface ParameterSetBase {
  parameterName: string;
}

export const matchParameterSetBase = (name: string): (
  <T extends ParameterSetBase = ParameterSetBase>(source: T[]) => Option<T>
) => Arr.findFirst(param => param.parameterName === name);
