import * as React from 'react'
import { Pressable } from 'react-native'
import { Appbar, Headline, TextInput } from 'react-native-paper'

import { useNavigation } from '~navigation/hooks/useNavigation'
import { isDefined } from '~utils/helpers/isDefined'
import { toCapitalizedLowerCase } from '~utils/helpers/toCapitalizedLowerCase'

type TProps = NoChildren & {
  title?: string
  onNameChange?: (newName: string) => void
}

export const DetailAppBar: React.FC<TProps> = ({ title, onNameChange }) => {
  const navigation = useNavigation()
  const hasTitle = isDefined(title)

  const [isEditing, setIsEditing] = React.useState(false)

  const [inputValue, setInputValue] = React.useState(title ?? '')

  const titleInput = React.useMemo(() => {
    if (!hasTitle) return null
    if (isEditing) {
      return (
        <TextInput
          autoFocus
          mode={`outlined`}
          value={inputValue}
          onChangeText={(value) => setInputValue(value)}
          onEndEditing={() => setIsEditing(false)}
        />
      )
    }
    return <Headline>{toCapitalizedLowerCase(title)}</Headline>
  }, [hasTitle, inputValue, isEditing, title])

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        {hasTitle && <Appbar.Content title={titleInput} />}

        {!isEditing && (
          <Appbar.Action icon="pencil" onPress={() => setIsEditing(true)} />
        )}
        {isEditing && (
          <Appbar.Action
            icon="check"
            size={30}
            onPress={() => {
              onNameChange?.(inputValue)
              setIsEditing(false)
            }}
          />
        )}
      </Appbar.Header>
      {isEditing && (
        <Pressable
          onPress={() => setIsEditing(false)}
          style={{
            zIndex: 10,
            width: '100%',
            height: `88%`,
            bottom: 0,
            position: 'absolute',
          }}
        />
      )}
    </>
  )
}
