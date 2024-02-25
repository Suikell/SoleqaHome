import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  split,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'
import * as React from 'react'
import { AuthProvider } from 'src/app/auth/contexts/AuthProvider'

type TProps = RequiredChildren

// !change when starting ngrok
// !ngrok http http://localhost:8000 (port based on BE)
const NGROK = `6b47-83-240-63-190.ngrok-free.app`

/**
 * GQL BE connection provider
 * currently Apollo client context that allows us to use all of the GQL operations we write (Q/M/S) in the component tree bellow this provider
 */
export const GqlProvider: React.FC<TProps> = ({ children }) => {
  const [token, setToken] = React.useState<Nullable<string>>(null)

  // TODO - add subscriptions
  // https://medium.com/simform-engineering/apollo-graphql-with-react-native-part-2-3d845f1b006

  const [client, setClient] =
    React.useState<Nullable<ApolloClient<NormalizedCacheObject>>>(null)

  React.useEffect(() => {
    const httpLink = createHttpLink({
      uri: `http://${NGROK}/graphql/`,
    })

    const authLink = setContext((_, { headers }) => {
      // get the authentication token from local storage if it exists
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      }
    })
    const wsLink = new GraphQLWsLink(
      createClient({
        url: `wss://${NGROK}/subscriptions/?token=${token}`,
        //     connectionParams: {
        //       authToken: token,
        //     },
        keepAlive: 60000,
        //     retryAttempts: 20,
        shouldRetry: (errOrClose) => {
          console.log(errOrClose)
          return true
        },
      }),
    )

    // The split function takes three parameters:
    // * A function that's called for each operation to execute
    // * The Link to use for an operation if the function returns a "truthy" value
    // * The Link to use for an operation if the function returns a "falsy" value

    const splitLink = split(
      ({ query }) => {
        const definition = getMainDefinition(query)
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        )
      },
      authLink.concat(wsLink),
      authLink.concat(httpLink),
    )

    const gqlClient = new ApolloClient({
      link: splitLink,
      cache: new InMemoryCache(),
    })

    setClient(gqlClient)
  }, [token])

  if (!client) {
    return null
  }

  return (
    <ApolloProvider client={client}>
      <AuthProvider setToken={setToken}>{children}</AuthProvider>
    </ApolloProvider>
  )
}

// <GqlProvider>  <UserForm users> </GqlProvider>
