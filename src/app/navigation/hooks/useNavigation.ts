import {
  NavigationProp,
  useNavigation as useRNNavigation,
} from '@react-navigation/core'

import { TRootStackParamList } from '~navigation/types'

/**
 * navigation hook typed with app-specific screen names
 * ! to be used in NON SCREEN-level components
 */
export const useNavigation = () => {
  return useRNNavigation<NavigationProp<TRootStackParamList>>()
}
