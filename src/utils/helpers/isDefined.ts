/**
 * Returns true if the provided `value` is NOT `null` or `undefined`
 * in a way that also the TS understands
 * can be passed to `Array.filter` to clear that array of not-defined values
 * https://stackoverflow.com/a/57989288
 */
export const isDefined = <TValue extends Anything>(
  value?: Nullable<TValue>,
): value is Defined<TValue> => {
  return value !== null && value !== undefined
}
