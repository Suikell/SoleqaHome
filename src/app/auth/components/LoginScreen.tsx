import * as React from 'react'
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { AuthForm } from 'src/app/auth/components/AuthForm'

import logo from '~images/logo.png'

type TAuthFormProps = PropsOf<typeof AuthForm>

type TProps = NoChildren & TAuthFormProps

export const LoginScreen: React.FC<TProps> = ({ onSubmit, isLoading }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
        >
          <Image style={styles.image} source={logo} />
          <AuthForm onSubmit={onSubmit} isLoading={isLoading} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(25, 28, 26)',
  },
  image: {
    width: '70%',
    resizeMode: 'contain',
  },
})
