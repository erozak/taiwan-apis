export enum ResourceFieldType {
  STRING = 'String',
  TIMESTAMP = 'Timestamp',
  DOUBLE = 'Double',
}

export interface ResourceField {
  id: string;
  type: string;
}
