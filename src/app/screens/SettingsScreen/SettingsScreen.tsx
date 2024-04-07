import * as React from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { Button, Snackbar } from 'react-native-paper'
import { useAuthCtx } from 'src/app/auth/contexts/AuthProvider'

import { SetNames } from '~screens/SettingsScreen/components/SetNames'
import { SetPassword } from '~screens/SettingsScreen/components/SetPassword'
import { CONTENT_MARGIN } from '~styles/spacing'
import { SimpleAppBar } from '~ui/Appbar/SimpleAppBar'
import { isDefined } from '~utils/helpers/isDefined'

type TProps = NoChildren

const successMessage = `Your changes have been saved`

const SUCCESS_DURATION = 3000
const ERROR_DURATION = 5000

// TODO - make this better, this is really weird solution

export const SettingsScreen: React.FC<TProps> = () => {
  const { userSuccess, passwordSuccess, settingError } = useAuthCtx()

  const [isPasswordSnackbar, setIsPasswordSnackbar] = React.useState(false)
  const [isProfileSnackbar, setIsProfileSnackbar] = React.useState(false)

  React.useEffect(() => {
    if (isDefined(userSuccess)) {
      setIsProfileSnackbar(true)
    }
    if (isDefined(passwordSuccess)) {
      setIsPasswordSnackbar(true)
    }
  }, [passwordSuccess, userSuccess])

  return (
    <>
      <SimpleAppBar title={`Settings`} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <View style={styles.content}>
              <SetNames />
              <SetPassword />
              <Button mode="contained">Logout</Button>
            </View>
            <Snackbar
              visible={isProfileSnackbar}
              onDismiss={() => setIsProfileSnackbar(false)}
              duration={userSuccess ? SUCCESS_DURATION : ERROR_DURATION}
              action={
                userSuccess
                  ? undefined
                  : {
                      label: 'Ok',
                    }
              }
            >
              {userSuccess ? successMessage : settingError}
            </Snackbar>
            <Snackbar
              visible={isPasswordSnackbar}
              onDismiss={() => setIsPasswordSnackbar(false)}
              action={
                passwordSuccess
                  ? undefined
                  : {
                      label: 'Ok',
                    }
              }
              duration={passwordSuccess ? SUCCESS_DURATION : ERROR_DURATION}
            >
              {passwordSuccess ? successMessage : settingError}
            </Snackbar>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
  content: {
    top: -CONTENT_MARGIN,
    rowGap: CONTENT_MARGIN * 3,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
  },
})
