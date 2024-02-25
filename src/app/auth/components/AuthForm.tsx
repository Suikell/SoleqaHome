import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

import { TMAuthUserVariables } from '~graphql/generated/graphql'
import { shrink } from '~utils/helpers/shrink'

export type TLogin = TMAuthUserVariables

type TProps = NoChildren & {
  onSubmit: (props: TLogin) => void
  isLoading: boolean
}

export const AuthForm: React.FC<TProps> = ({ onSubmit, isLoading }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = React.useCallback(() => {
    onSubmit({ email, password })
  }, [onSubmit, password, email])

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <TextInput
          label={`Email`}
          value={email}
          onChangeText={setEmail}
          mode={`outlined`}
        />
        <TextInput
          label={`Password`}
          value={password}
          secureTextEntry
          onChangeText={setPassword}
          mode={`outlined`}
        />
      </View>
      <Button onPress={handleSubmit} disabled={isLoading} mode={`contained`}>
        Log in
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    gap: shrink(100),
  },
  inputs: {
    gap: shrink(50),
  },
})
