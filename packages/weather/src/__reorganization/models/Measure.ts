export enum MeasureUnit {
  CENTIMETER = 'cm',
}

export function isInMeasureUnit(source: unknown): source is MeasureUnit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return !!source && Object.values(MeasureUnit).includes(source as any);
}

