import type { Duration } from './Duration';
import type { WeatherElement } from './WeatherElement';

export interface DurationForecast<I = unknown>
  extends Duration {
  weatherElement: WeatherElement<I>[];
}
