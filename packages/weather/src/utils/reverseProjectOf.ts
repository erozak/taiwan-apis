import { pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';
import * as Arr from 'fp-ts/Array';

export function reverseProjectOf<T, S extends string = string>(map: Record<S, T>): (source: T) => O.Option<S> {
  return source => pipe(
    Object.entries(map) as Array<[S, T]>,
    Arr.findFirst(([, value]) => value === source),
    O.map(([key]) => key),
  )
}
