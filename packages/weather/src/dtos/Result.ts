export enum ResourceFieldType {
  STRING = 'String',
  TIMESTAMP = 'Timestamp',
  DOUBLE = 'Double',
}

export interface ResourceField {
  id: string;
  type: string;
}

export interface ResultResource {
  resource_id: string;
  fields: ResourceField[];
}

export interface SuccessResult<T> {
  success: 'true';
  result: ResultResource;
  records: T;
}
