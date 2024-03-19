import * as React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { AuthForm } from 'src/app/auth/components/AuthForm'

import logo from '~images/logo.png'

type TAuthFormProps = PropsOf<typeof AuthForm>

type TProps = NoChildren & TAuthFormProps

export const LoginScreen: React.FC<TProps> = ({ onSubmit, isLoading }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} />
      <AuthForm onSubmit={onSubmit} isLoading={isLoading} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(25, 28, 26)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '70%',
    resizeMode: 'contain',
  },
})
