import type { ResourceField } from './Resource';

export interface ResultResource {
  fields: ResourceField[];
}

export interface ResultResourceWithId<Id extends string = string>
  extends ResultResource {
  resource_id: Id;
}

export interface SuccessResult<T, R extends ResultResource = ResultResource> {
  success: 'true';
  result: R;
  records: T;
}
