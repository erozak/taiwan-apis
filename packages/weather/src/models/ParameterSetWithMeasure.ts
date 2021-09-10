import type { ParameterSetBase } from './ParameterSetBase';

export interface ParameterSetWithMeasure
  extends ParameterSetBase {
  parameterValue: string;
  parameterMeasure: string;
}
