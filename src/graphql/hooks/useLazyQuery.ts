import {
  LazyQueryHookOptions as ApolloLazyQueryHookOptions,
  OperationVariables,
  useLazyQuery as useApolloLazyQuery,
} from '@apollo/client'

import { DEFAULT_Q_POLICY } from './apolloHooks.config'

type TQueryDocument = Parameters<typeof useApolloLazyQuery>[0]

// reexport because code-gen takes the type from the same file as the hook
export type LazyQueryHookOptions<
  TData,
  TVariables extends OperationVariables,
> = ApolloLazyQueryHookOptions<TData, TVariables>

/**
 * Apollo Client’s `useLazyQuery` wrapper.
 */
export const useLazyQuery = <
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables,
>(
  query: TQueryDocument,
  options: LazyQueryHookOptions<TData, TVariables>,
) => {
  const [executeQuery, result] = useApolloLazyQuery<TData, TVariables>(query, {
    fetchPolicy: DEFAULT_Q_POLICY,
    ...options,
  })

  return [executeQuery, result] as const
}
