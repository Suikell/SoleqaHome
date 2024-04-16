import { useAppTheme } from 'App'
import * as React from 'react'
import { Snackbar } from 'react-native-paper'

import { createContext } from '~utils/context/createContext'
import { isDefined } from '~utils/helpers/isDefined'

type TStatus = `error` | `success`
type TContextValue = {
  presentStatusToast: (type: TStatus, message?: string) => void
}

const [
  Provider, //
  useStatusToastCtx,
] = createContext<TContextValue>(`StatusToast`)

type TProps = RequiredChildren

const SUCCESS_DURATION = 3000
const ERROR_DURATION = 5000

const ERROR_MESSAGE = `Something went wrong. Please try again later.`
const SUCCESS_MESSAGE = `Success!`

/**
 * Provider for displaying status toast.
 * Based on the type of the toast, it will be displayed with different colors.
 */
export const StatusToastProvider: React.FC<TProps> = ({ children }) => {
  const theme = useAppTheme()

  const [isVisible, setIsVisible] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [message, setMessage] = React.useState(SUCCESS_MESSAGE)

  const presentStatusToast = React.useCallback(
    (type: TStatus, message?: string) => {
      setIsError(type === `error`)
      const duration = type === `error` ? ERROR_DURATION : SUCCESS_DURATION
      const defaultMessage = type === `error` ? ERROR_MESSAGE : SUCCESS_MESSAGE

      const messageExists = isDefined(message)
      const messageNotEmpty = messageExists && message.trim().length > 0
      const hasMessage = messageExists && messageNotEmpty

      setMessage(hasMessage ? message : defaultMessage)
      setIsVisible(true)

      setTimeout(() => {
        setIsVisible(false)
      }, duration)
    },
    [setIsVisible],
  )

  return (
    <Provider value={{ presentStatusToast }}>
      <>
        {children}
        <Snackbar
          wrapperStyle={{
            top: 60,
          }}
          style={{
            borderColor: isError
              ? theme.colors.errorContainer
              : theme.colors.primaryContainer,
            borderWidth: 2,
          }}
          visible={isVisible}
          onDismiss={() => setIsVisible(false)}
          action={{
            label: 'Ok',
            textColor: isError
              ? theme.colors.errorContainer
              : theme.colors.primaryContainer,
          }}
        >
          {message}
        </Snackbar>
      </>
    </Provider>
  )
}

export { useStatusToastCtx }
