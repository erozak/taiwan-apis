export enum MeasureUnit {
  CENTIMETER = 'cm',
  METER_PER_SECOND = '公尺/秒',
  PERCENTAGE = '百分比',
  DEGREE_CELSIUS = '攝氏度',
  DEGREE_CELSIUS_SYMBOL = 'C',
  WEATHER_COMFORT_INFORMATION = '自定義 CI 文字',
  WEATHER_WX_MESSAGE = '自定義 Wx 文字',
  WEATHER_WX_UNIT = '自定義 Wx 單位',
  EMPTY = 'NA',
  BEAUFORT_SCALE = '蒲福風級',
  SUN_EXPOSURE_HARM_LEVEL = '曝曬級數',
  ULTRA_VIOLET_INDEX = '紫外線指數',
}

export interface Measure {
  value: string;
  measures: string;
}
