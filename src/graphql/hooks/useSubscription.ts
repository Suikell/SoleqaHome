import {
  DocumentNode,
  OperationVariables,
  SubscriptionHookOptions as ApolloSubscriptionHookOptions,
  TypedDocumentNode,
  useSubscription as useApolloSubscription,
} from '@apollo/client'

// reexport because code-gen takes the type from the same file as the hook
export type SubscriptionHookOptions<
  TData,
  TVariables extends OperationVariables,
> = ApolloSubscriptionHookOptions<TData, TVariables>

/**
 * Apollo Client’s `useSubscription` wrapper.
 */
export const useSubscription = <
  TData,
  TVariables extends OperationVariables = OperationVariables,
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: SubscriptionHookOptions<TData, TVariables>,
) => {
  const result = useApolloSubscription(query, options)

  return result
}
