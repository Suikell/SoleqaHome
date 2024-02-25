import * as React from 'react'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { LoginScreen } from 'src/app/auth/components/LoginScreen'
import { useLoginUser } from 'src/app/auth/hooks/useLoginUser'

import { TFUser, TMAuthUserVariables } from '~graphql/generated/graphql'
import { createContext } from '~utils/context/createContext'

import { useLogoutUser } from '../hooks/useLogoutUser'

type TContext = {
  user: TFUser
  logout: ReturnType<typeof useLogoutUser>['logoutUser']
}

export type TLogin = TMAuthUserVariables

const [Provider, useAuthCtx] = createContext<TContext>(`AuthConfig`)

type TProps = RequiredChildren & {
  setToken: ReactSetState<Nullable<string>>
}

/**
 * Context provider getting the logged user, logout API.
 */
export const AuthProvider: React.FC<TProps> = ({ children, setToken }) => {
  const [user, setUser] = React.useState<Nullable<TFUser>>(null)
  const { validateUser, submitting } = useLoginUser()

  const logoutUser = React.useCallback(() => {
    setUser(null)
    setToken(null)
  }, [setToken])

  const onLogin = React.useCallback(
    async ({ email, password }: TLogin) => {
      const data = await validateUser({ email, password })

      const login = data?.login
      if (!login) return

      setToken(login.token)
      setUser(login.user)
    },
    [setToken, validateUser],
  )

  if (submitting) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: `center`,
          alignItems: `center`,
          backgroundColor: `rgb(25, 28, 26)`,
        }}
      >
        <ActivityIndicator
          animating
          color={`rgb(111, 219, 169)`}
          size={`large`}
        />
      </View>
    )
  }
  // pass login func from useLoginUser
  if (!user) {
    return <LoginScreen onSubmit={onLogin} isLoading={false} />
  }

  return <Provider value={{ user, logout: logoutUser }}>{children}</Provider>
}

export { useAuthCtx }
