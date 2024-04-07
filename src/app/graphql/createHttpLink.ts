import { HttpLink } from '@apollo/client'

const beUrl = `Hello? Who should I be?`

export type TCreateHttpLinkOptions = {
  token: string
}

/**
 * creates an Apollo GQL client HTTP link
 * filling it with required header (user token, selected language)
 * ! this is a terminating link and it should be placed at the end of the link array
 * https://www.apollographql.com/docs/react/api/link/introduction#the-terminating-link
 */
export const createHttpLink = () => {
  return new HttpLink({
    uri: `${beUrl}/graphql`,
  })
}
