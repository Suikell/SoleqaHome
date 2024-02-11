// * helper types for mathematic calculations in TS type system
// inspiration: https://itnext.io/implementing-arithmetic-within-typescripts-type-system-a1ef140a6f6f

// prettier-ignore
// helper type creating array of required length
// the PrevArray "argument" is used just internally in the recursion
//  > usage: BuildArray<3> -> [unknown, unknown, unknown]
type BuildArray<Length extends number, PrevArray extends unknown[] = []> = PrevArray extends { length: Length }
  ? PrevArray
  : BuildArray<Length, [...PrevArray, unknown]>

// helper type transforming array type to number using its length
//  > usage: Length<[unknown, unknown, unknown]> -> 3
type Length<T extends unknown[]> = T extends { length: infer L } ? L : never

// prettier-ignore
/**
 * math calc type used to add two number-types – those types should be both positive numbers
 *  > usage: Add<2, 4> -> 6
 */
export type Add<A extends number, B extends number> = Length<[...BuildArray<A>, ...BuildArray<B>]>

// prettier-ignore
/**
 * math calc type used to subtract two number-types – those types should be both positive numbers
 *  > usage: Subtract<4, 2> -> 2
 */
export type Subtract<A extends number, B extends number> =
  BuildArray<A> extends [ ...infer U, ...BuildArray<B>]
    ? Length<U>
    : never

// prettier-ignore
// helper type recursively adding the `Num` number `Iteration` times
// the Result "argument" is used just internally in a recursion
//  > usage: MultiAdd<2, 3> -> 6 (2 + 2 + 2)
type MultiAdd<Num extends number, Iterations extends number, Result extends number = 0> =
  Iterations extends 0
    ? Result // Iterations reached 0 -> return result
    : MultiAdd<Num, Subtract<Iterations, 1>, Add<Num, Result>> // Iterations > 0 -> add Num to Result and lower Iterations by one

/**
 * math calc type used to multiply two number-types – those types should be both positive numbers
 *  > usage: Multiply<4, 2> -> 8 (4 * 2)
 */
export type Multiply<A extends number, B extends number> = MultiAdd<A, B>

/**
 * math calc type used to determine if provided number-type is positive number or not
 */
export type IsPositive<Num extends number> = `${Num}` extends `-${number}`
  ? false
  : true
