import * as React from 'react'
import { LoginScreen } from 'src/app/auth/components/LoginScreen'
import { useAuthUser } from 'src/app/auth/hooks/useAuthUser'
import { useSettingUpdaters } from 'src/app/auth/hooks/useSettingUpdaters'

import { TMAuthUserVariables } from '~graphql/generated/graphql'
import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'
import { createContext } from '~utils/context/createContext'

type TUpdaters = ReturnType<typeof useSettingUpdaters>
type TContext = TUpdaters & {
  user: ReturnType<typeof useAuthUser>['user']
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

  if (loading) {
    return <LoadingIndicator />
  }

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
