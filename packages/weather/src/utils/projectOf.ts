import { pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';

export function projectOf<T, S extends string = string>(map: Record<S, T>): (source: S) => O.Option<T> {
  return source => pipe(
    map[source],
    O.fromNullable,
  )
}
