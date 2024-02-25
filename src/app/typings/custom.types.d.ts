/* eslint-disable @typescript-eslint/ban-types */

// string aliases used to indicate some semantic meaning of the value

/**
 * Simple string alias for a more concise typings involving ID of entities.
 */
declare type ID = string

/**
 * Either specified type or null
 */
declare type Nullable<TType> = TType | null

/**
 * Shortcut for `Nullable<ID>`
 */
declare type NullableID = Nullable<ID>

/**
 * Shortcut for `ReadonlyArray<T>`
 */
declare type RoA<TItem> = ReadonlyArray<TItem>

/**
 * returns the type that is wrapped inside the provided promise type
 */
declare type PromisedType<TPromise> =
  TPromise extends PromiseLike<infer TInferredType> ? TInferredType : TPromise

/**
 * just a shorthand for the React.ComponentProps helper
 */
declare type PropsOf<TComponent> = React.ComponentProps<TComponent>

/**
 * gets an union of object's values
 */
declare type ValueOf<T extends object> = T[keyof T]

/**
 * use to describe that the component does accept children & works with them but also can work without them
 */
declare type Children = React.PropsWithChildren<{}>

/**
 * use to describe that the component does require children to be meaningful
 */
declare type RequiredChildren = Required<React.PropsWithChildren<{}>>

/**
 * use to describe that the component does not expect any children prop (so that we wouldn't pass any by accident)
 */
declare type NoChildren = {
  children?: never
}

/**
 * removes `null` and `undefined` options from the type, making it strictly defined
 */

declare type Defined<T> = Exclude<T, null | undefined>
/**
 * removes `null` and `undefined` from types of all properties
 */

/**
 * A safe version of the Omit utility type,
 * that enables to omit just the keys that actually exist in the object
 */
declare type OmitSafe<TObject, TKeys extends keyof TObject> = Omit<
  TObject,
  TKeys
>

/**
 * A safe version of the Exclude utility type,
 * that enables to exclude just the keys that actually exist in the union
 */
declare type ExcludeSafe<TUnion extends string, TKeys extends TUnion> = Exclude<
  TUnion,
  TKeys
>

/**
 * A safe version of the Extract utility type,
 * that enables to extract just the keys that actually exist in the union
 */
declare type ExtractSafe<TUnion extends string, TKeys extends TUnion> = Extract<
  TUnion,
  TKeys
>

/**
 * returns `TIndex`-th parameter of provided function type
 */
declare type Param<
  TFunction,
  TIndex extends number,
> = Parameters<TFunction>[TIndex]

/**
 * returns first parameter of provided function type
 */
declare type FirstParam<TFunction> = Param<TFunction, 0>

/**
 * returns second parameter of provided function type
 */
declare type SecondParam<TFunction> = Param<TFunction, 1>

/**
 * React useState setter
 */
declare type ReactSetState<TStateType> = React.Dispatch<
  React.SetStateAction<TStateType>
>

/**
 * React state management tuple [state, setState]
 */
declare type StateManagement<TStateType> = [
  TStateType,
  ReactSetState<TStateType>,
]
