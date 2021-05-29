import type { DateTime } from './Date';

export enum WeatherElementName {
  WX = 'Wx',
  POP = 'PoP',
  POP_12H = 'PoP12h',
}

type WeatherElmentValueBase<D = never> = D & {
  startTime: DateTime;
  endTime: DateTime;
};

export type WeatherElmentValueParameterVariant = WeatherElmentValueBase<{
  parameter: {
    parameterName: string;
    parameterValue: string;
  };
}>;

interface WeatherElmentValueMeasureVariantMeasure {
  value: string;
  measures: string;
}

export type WeatherElementValuwMeasureVariant = WeatherElmentValueBase<{
  elementValue: WeatherElmentValueMeasureVariantMeasure[];
}>;

export interface WeatherEelement<
  Value extends WeatherElmentValueBase = WeatherElmentValueBase,
> {
  elementName: WeatherElementName;
  time: Value[];
}

export interface WeatherEelementWithDescription<
  Value extends WeatherElmentValueBase = WeatherElmentValueBase,
> {
  elementName: WeatherElementName;
  description: string;
  time: Value[];
}
