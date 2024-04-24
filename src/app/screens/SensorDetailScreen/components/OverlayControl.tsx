import { TAppTheme } from 'App'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import Collapsible from 'react-native-collapsible'
import { Button } from 'react-native-paper'

// TODO - move to ui?
import { OverlayControlContent } from '~screens/SensorDetailScreen/components/OverlayControlContent'
import {
  useGraphControlCtx,
  useGraphValuesCtx,
} from '~screens/SensorDetailScreen/contexts/GraphControlProvider'
import { CONTENT_MARGIN } from '~styles/spacing'
import { FlexRow } from '~ui/Layout/FlexRow'
import { Headline } from '~ui/Text/Headline'
import { shrink } from '~utils/helpers/shrink'
import { useStylesWithTheme } from '~utils/hooks/useStylesWithTheme'

type TProps = NoChildren & {
  isCollapsed: boolean
  setIsCollapsed: ReactSetState<boolean>
}

export const OverlayControl: React.FC<TProps> = ({
  isCollapsed,
  setIsCollapsed,
}) => {
  const styles = useStylesWithTheme(styleCreator)
  const { isOverlayVisible } = useGraphValuesCtx()
  const { setIsOverlayVisible } = useGraphControlCtx()

  const onToggleButton = () => {
    if (isOverlayVisible) {
      setIsOverlayVisible(false)
      return
    }
    setIsCollapsed(false)
  }

  return (
    <View style={styles.container}>
      {isCollapsed && (
        <FlexRow
          justifyContent={`space-between`}
          gap={shrink(60)}
          alignItems={`center`}
          marginHorizontal={CONTENT_MARGIN}
        >
          <Headline text={`Period overlay`} />

          <Button onPress={onToggleButton}>
            {isOverlayVisible ? `Hide` : `Show`}
          </Button>
        </FlexRow>
      )}

      <Collapsible collapsed={isCollapsed}>
        <OverlayControlContent
          isCollapsed={isCollapsed}
          closeContent={() => setIsCollapsed(true)}
        />
      </Collapsible>
    </View>
  )
}

const styleCreator = (theme: TAppTheme) =>
  StyleSheet.create({
    container: {
      marginTop: CONTENT_MARGIN,
    },
    checkbox: {
      borderWidth: 1,
      borderColor: theme.colors.primary,
      // RN paper's checkbox has icon size of 24,
      // which is exactly the same as the border radius to make it round
      borderRadius: 24,
    },
  })
