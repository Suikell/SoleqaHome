import * as React from 'react'
import { LoginScreen } from 'src/app/auth/components/LoginScreen'
import { useAuthUser } from 'src/app/auth/hooks/useAuthUser'
import { useSettingUpdaters } from 'src/app/auth/hooks/useSettingUpdaters'

import { TFUser, TMAuthUserVariables } from '~graphql/generated/graphql'
import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'
import { createContext } from '~utils/context/createContext'

type TUpdaters = ReturnType<typeof useSettingUpdaters>
type TContext = TUpdaters & {
  user: TFUser
  logout: () => void
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
  const { validateUser, logoutUser, loading, user, setUser } = useAuthUser({
    setToken,
  })
  const updaters = useSettingUpdaters({ setUser })

  // const onLogin = React.useCallback(
  //   async ({ email, password }: TLogin) => {
  //     const data = await validateUser({ email, password })

  //     console.log('data', data)
  //     const login = data?.login
  //     if (!login) return

  //     setToken(login.token)
  //     setUser(login.user)
  //   },
  //   [setToken, validateUser],
  // )

  if (loading) {
    return <LoadingIndicator />
  }

  // pass login func from useLoginUser
  if (!user) {
    return <LoginScreen onSubmit={validateUser} isLoading={false} />
  }

  return (
    <Provider value={{ user, logout: logoutUser, ...updaters }}>
      {children}
    </Provider>
  )
}

export { useAuthCtx }
