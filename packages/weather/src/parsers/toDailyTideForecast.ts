import { pipe } from 'fp-ts/function';
import * as E from 'fp-ts/Either';
import * as Arr from 'fp-ts/Array';

import { projectOf } from '../utils';
import * as Dto from '../dtos';
import { ParseError } from '../errors/ParseError';
import { DailyTideForecast } from '../models';
import {
  TIDAL_RANGE_VALUE_MAP,
} from './constants';
import { fromWeatherElement } from './fromWeatherElement';
import { toTideForecast } from './toTideForecast'
import { makeToUtcDatetime } from './toUtcDatetime'

export function toDailyTideForecast(
  source: Dto.WeatherForecast,
): E.Either<ParseError, DailyTideForecast> {
  const ioError = () => new ParseError({
    source,
    message: 'Cannot parse to DailyTideForecast',
  });

  return pipe(
    E.Do,
    E.bind('lunarDate', () => pipe(
      source.weatherElement,
      fromWeatherElement(
        Dto.TidalWeatherElementName.LUNAR_CANLENDAR,
        Dto.isSingleValueVariant,
        ioError,
      ),
      E.map(el =>
        normalizeLunarCalendarDate(el.elementValue)
      ),
    )),
    E.bind('range', () => pipe(
      source.weatherElement,
      fromWeatherElement(
        Dto.TidalWeatherElementName.TIDAL_RANGE,
        Dto.isSingleValueVariant,
        ioError,
      ),
      E.chainOptionK(ioError)(el => pipe(
        el.elementValue,
        projectOf(TIDAL_RANGE_VALUE_MAP)
      )),
    )),
    E.bind('forecasts', () => pipe(
      source.weatherElement,
      fromWeatherElement(
        Dto.TidalWeatherElementName.TIDAL_RANGE,
        Dto.isTimeListVariant,
        ioError,
      ),
      E.chain(el => pipe(
        el.time,
        Arr.traverse(E.Applicative)(toTideForecast)
      )),
    )),
    E.bind('startDatetime', makeToUtcDatetime(source.startTime)),
    E.bind('endDatetime', makeToUtcDatetime(source.endTime)),
  )
}

function normalizeLunarCalendarDate(source: string): string {
  return source
    .split('/')
    .map(value => value.padStart(2, '0'))
    .join('-');
}
