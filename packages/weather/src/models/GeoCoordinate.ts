export interface GeoCoordinate {
  lat: string;
  lon: string;
}

export interface GeoCoordinateWithCode
  extends GeoCoordinate {
  geocode: string;
}
