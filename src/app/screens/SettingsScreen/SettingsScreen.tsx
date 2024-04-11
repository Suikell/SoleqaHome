import * as React from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { Button } from 'react-native-paper'
import { useAuthCtx } from 'src/app/auth/contexts/AuthProvider'

import { SetNames } from '~screens/SettingsScreen/components/SetNames'
import { SetPassword } from '~screens/SettingsScreen/components/SetPassword'
import { CONTENT_MARGIN } from '~styles/spacing'
import { SimpleAppBar } from '~ui/Appbar/SimpleAppBar'

type TProps = NoChildren

// TODO - make this better, this is really weird solution

export const SettingsScreen: React.FC<TProps> = () => {
  const { logout } = useAuthCtx()
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
              <Button onPress={logout} mode="contained">
                Logout
              </Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
  content: {
    top: -CONTENT_MARGIN,
    padding: CONTENT_MARGIN,
    rowGap: CONTENT_MARGIN * 3,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
  },
})
