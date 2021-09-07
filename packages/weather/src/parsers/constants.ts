import * as Dto from '../dtos';
import { TidalDatum, TideType, TidalRange } from '../models';

export const TIDAL_RANGE_VALUE_MAP: Record<string, TidalRange> = {
  [Dto.TidalRangeValue.MACRO]: /* */ TidalRange.MACRO,
  [Dto.TidalRangeValue.MESO]: /*  */ TidalRange.MESO,
  [Dto.TidalRangeValue.MICRO]: /* */ TidalRange.MICRO,
}

export const TIDAL_DATUM_PARAM_NAME_MAP: Record<string, TidalDatum> = {
  [Dto.TidalParamName.TAIWAN_VERTICAL_DATUM]: /*    */ TidalDatum.TAIWAN_VERTICAL_DATUM,
  [Dto.TidalParamName.MEAN_SEA_LEVEL]: /*           */ TidalDatum.MEAN_SEA_LEVEL,
  [Dto.TidalParamName.LOWEST_ASTRONOMICAL_TIDE]: /* */ TidalDatum.LOWEST_ASTRONOMICAL_TIDE,
};

export const TIDE_TYPE_VALUE_MAP: Record<string, TideType> = {
  [Dto.TideTypeValue.HIGH_WATER]: /* */ TideType.HIGH_WATER,
  [Dto.TideTypeValue.LOW_WATER]: /*  */ TideType.LOW_WATER,
}
