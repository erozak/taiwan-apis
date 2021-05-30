import { DateTime } from './Date';

export namespace TideForecast {
  export enum StationElementName {
    MOON_CALENDAR = '農曆',
    TIDAL_RANGE = '潮差',
    DAILY_TIDE = '1日潮汐',
  }

  export enum TidalRange {
    MACRO = '大',
    MESO = '中',
    MICRO = '小',
  }

  export enum TideType {
    LOW_WATER = '乾潮',
    HIGH_WATER = '滿潮',
  }

  export const TIDE_TYPE_NAME = '潮汐';

  export interface TideParam {
    parameterName: typeof TIDE_TYPE_NAME;
    parameterValue: TideType;
  }

  export enum SeaLevelMeasureType {
    TAIWAN_VERTICAL_DATUM = '潮高(TWVD)',
    MEAN_SEA_LEVEL = '潮高(當地)',
    CHART_DATUM = '潮高(相對海圖)',
  }

  export interface SeaLevelParam {
    parameterName: SeaLevelMeasureType;
    parameterValue: string;
    parameterMeasure: string;
  }

  export interface DailyRecord {
    dataTime: DateTime;
    parameter: Array<TideParam | SeaLevelParam>;
  }

  export enum ElementName {
    DAILY_TIDE = '1日潮汐',
    TIDAL_RANGE = '潮差',
    LUNAR_CALENDAR_DATE = '農曆',
  }

  export interface DailyTideElement {
    elementName: ElementName.DAILY_TIDE;
    time: DailyRecord[];
  }

  export interface TidalRangeElement {
    elementName: ElementName.TIDAL_RANGE;
    elementValue: TidalRange;
  }

  export interface LunarCalendarDateElement {
    elementName: ElementName.LUNAR_CALENDAR_DATE;
    /**
     * format: MM/DD
     */
    elementValue: string;
  }

  export interface Forecast {
    endTime: string;
    startTime: string;
    weatherElement: Array<DailyTideElement | LunarCalendarDateElement | TidalRangeElement>;
  }

  export interface Station {
    locationsName: string;
    stationId: string;
    validTime: Forecast[];
  }
}
