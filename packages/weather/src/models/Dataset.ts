export interface DatasetMeta {
  datasetDescription?: string;
  note?: string;
}

export type WithDatasetId<D> = {
  dataid: string;
} & D

export interface LocationDataset<D>
  extends DatasetMeta {
  location: D[];
}

export interface LocationsDataset<D>
  extends DatasetMeta {
  locations: D[];
}
