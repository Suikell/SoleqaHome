import {
  OperationVariables,
  QueryHookOptions as ApolloQueryHookOptions,
  useQuery as useApolloQuery,
} from '@apollo/client'

import { DEFAULT_Q_POLICY } from './apolloHooks.config'

type TQueryDocument = Parameters<typeof useApolloQuery>[0]

// reexport because code-gen takes the type from the same file as the hook
export type QueryHookOptions<
  TData,
  TVariables extends OperationVariables,
> = ApolloQueryHookOptions<TData, TVariables>

/**
 * Apollo Client’s `useQuery` wrapper.
 */
export const useQuery = <
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables,
>(
  query: TQueryDocument,
  options?: QueryHookOptions<TData, TVariables>,
) => {
  const result = useApolloQuery<TData, TVariables>(query, {
    fetchPolicy: DEFAULT_Q_POLICY,
    ...options,
  })

  return result
}
