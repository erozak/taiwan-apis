import type { ParameterSetBase } from './ParameterSetBase';

export interface ParameterSetWithUnit
  extends ParameterSetBase {
  parameterUnit: string;
}
