import type { ParameterSetBase } from './ParameterSetBase';
import type { ParameterSetWithMeasure } from './ParameterSetWithMeasure';
import type { ParameterSetWithUnit } from './ParameterSetWithUnit';

export type ParameterSet =
  | ParameterSetWithMeasure
  | ParameterSetWithUnit
  | ParameterSetBase;
