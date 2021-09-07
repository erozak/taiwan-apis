export interface LocationDataWithId<T> {
  dataid: string;
  /**
   * NOTE this always be len 1
   */
  location: T[];
}
