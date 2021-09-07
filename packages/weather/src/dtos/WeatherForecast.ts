import type { DateTime } from './Date';
import type { WeatherElement } from './WeatherElement';

export interface WeatherForecast {
  weatherElement: WeatherElement[];
  endTime: DateTime;
  startTime: DateTime;
}
