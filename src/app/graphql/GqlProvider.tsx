import * as React from 'react';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

import { createHttpLink } from './createHttpLink';

type TProps = RequiredChildren

/**
 * GQL BE connection provider
 * currently Apollo client context that allows us to use all of the GQL operations we write (Q/M/S) in the component tree bellow this provider
 */
export const GqlProvider: React.FC<TProps> = ({ children }) => {
  // TODO - add user token
  // const { user } = getUser()

  // TODO - add subscriptions
  // https://medium.com/simform-engineering/apollo-graphql-with-react-native-part-2-3d845f1b006

  const [client, setClient] =
    React.useState<Nullable<ApolloClient<NormalizedCacheObject>>>(null)

  React.useEffect(() => {
    //   if (!user.token) {
    // return
    //   }

    const gqlClient = new ApolloClient({
      link: createHttpLink(),
      cache: new InMemoryCache(),
    })

    setClient(gqlClient)
  }, [])

  if (!client) {
    return null
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
