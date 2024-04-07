import * as React from 'react'
import { FlexStyle, StyleSheet, View, ViewStyle } from 'react-native'

type TProps = RequiredChildren & {
  justifyContent?: FlexStyle['justifyContent']
  alignItems?: FlexStyle['alignItems']
  margin?: FlexStyle['margin']
  marginTop?: FlexStyle['marginTop']
  marginBottom?: FlexStyle['marginBottom']
  marginLeft?: FlexStyle['marginLeft']
  marginRight?: FlexStyle['marginRight']
  marginVertical?: FlexStyle['marginVertical']
  marginHorizontal?: FlexStyle['marginHorizontal']
  padding?: FlexStyle['padding']
  paddingTop?: FlexStyle['paddingTop']
  paddingBottom?: FlexStyle['paddingBottom']
  paddingLeft?: FlexStyle['paddingLeft']
  paddingRight?: FlexStyle['paddingRight']
  paddingVertical?: FlexStyle['paddingVertical']
  paddingHorizontal?: FlexStyle['paddingHorizontal']
  gap?: FlexStyle['gap']
  rowGap?: FlexStyle['rowGap']
  height?: FlexStyle['height']
  width?: FlexStyle['width']
  maxWidth?: FlexStyle['maxWidth']
  alignSelf?: FlexStyle['alignSelf']
  borderBottomWidth?: FlexStyle['borderBottomWidth']
  borderBottomColor?: ViewStyle['borderBottomColor']
  flexWrap?: FlexStyle['flexWrap']
}

export const FlexRow: React.FC<TProps> = ({ children, ...style }) => {
  return <View style={[styles.row, style]}>{children}</View>
}

const styles = StyleSheet.create({
  row: {
    flexDirection: `row`,
    alignItems: `center`,
  },
})
