import { useAppTheme } from 'App'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Icon } from 'react-native-paper'

import { Card } from '~ui/Cards/Card'
import { ChooseNameModal } from '~ui/Group/ChooseNameModal'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren

export const AddGroupButton: React.FC<TProps> = () => {
  const theme = useAppTheme()
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  return (
    <>
      <Card
        onPress={() => setIsModalVisible(true)}
        cardStyle={styles.container}
      >
        <Icon source={`plus`} size={60} color={theme.colors.primary} />
      </Card>
      <ChooseNameModal
        visible={isModalVisible}
        hideModal={() => setIsModalVisible(false)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: shrink(300),
    height: `auto`,
    alignItems: `center`,
    justifyContent: `center`,
    padding: shrink(32),
  },
})
