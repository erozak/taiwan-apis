export enum ResourceFieldType {
  STRING = 'String',
  TIMESTAMP = 'Timestamp',
  DOUBLE = 'Double',
}

export interface ResourceField<T extends string = string> {
  id: string;
  type: T;
}

export type ResultResource<
  Fields extends Record<string, ResourceField> = Record<string, never>,
> = Fields & {
  resource_id: string;
};

export interface SuccessResult<Record, Result = ResultResource> {
  success: true;
  result: Result;
  records: Record;
}
