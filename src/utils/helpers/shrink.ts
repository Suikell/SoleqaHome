import { Dimensions } from 'react-native'

/**
 * Shrinks full resolution size by pixel density.
 */
const scale = Dimensions.get('window').scale

export const shrink = (size: number) => size / scale
