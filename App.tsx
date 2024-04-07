import 'react-native-gesture-handler'

import {
  DefaultTheme as NavTheme,
  NavigationContainer,
} from '@react-navigation/native'
import * as React from 'react'
import {
  adaptNavigationTheme,
  DefaultTheme,
  PaperProvider,
  useTheme,
} from 'react-native-paper'
import { cs, registerTranslation } from 'react-native-paper-dates'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GqlProvider } from 'src/app/graphql/GqlProvider'
import { ActuatorValueProvider } from 'src/app/shared/components/ActuatorValueProvider'
import { SensorValueProvider } from 'src/app/shared/components/SensorValueProvider'
import { CategoriesProvider } from 'src/app/shared/contexts/CategoriesProvider'

import { Navigation } from '~navigation/components/Navigation'

export const BG_COLOR = 'rgb(25, 28, 26)'

const darkTheme = {
  custom: {
    criticalUnder: `#FFDE89`,
    criticalUnderFocus: `#fce9bb`,
    criticalOver: `#FF7373`,
    criticalOverFocus: `#ffa4a4`,
    overlay: `#6CC8FF`,
    overlayFocus: `#bbe6ff`,

    remove: `rgb(255, 111, 95)`,
  },
  colors: {
    primary: 'rgb(111, 219, 169)',
    onPrimary: 'rgb(0, 56, 36)',
    primaryContainer: 'rgb(0, 82, 54)',
    onPrimaryContainer: 'rgb(139, 247, 195)',
    onPressPrimary: 'rgba(111, 219, 169, 0.150)',
    secondary: 'rgb(180, 204, 189)',
    onSecondary: 'rgb(32, 53, 42)',
    secondaryContainer: 'rgb(54, 75, 64)',
    onSecondaryContainer: 'rgb(208, 232, 216)',
    tertiary: '#B7EDD4',
    onTertiary: 'rgb(6, 53, 67)',
    tertiaryContainer: 'rgb(36, 76, 90)',
    onTertiaryContainer: '#caf0de',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: BG_COLOR,
    onBackground: 'rgb(225, 227, 223)',
    surface: 'rgb(25, 28, 26)',
    onSurface: 'rgb(225, 227, 223)',
    surfaceVariant: 'rgb(64, 73, 67)',
    onSurfaceVariant: 'rgb(192, 201, 193)',
    outline: 'rgb(138, 147, 140)',
    outlineVariant: 'rgb(64, 73, 67)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(225, 227, 223)',
    inverseOnSurface: 'rgb(46, 49, 47)',
    inversePrimary: 'rgb(0, 108, 73)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(29, 38, 33)',
      level2: 'rgb(32, 43, 37)',
      level3: 'rgb(35, 49, 42)',
      level4: 'rgb(35, 51, 43)',
      level5: 'rgb(37, 55, 46)',
    },
    surfaceDisabled: 'rgba(225, 227, 223, 0.12)',
    onSurfaceDisabled: 'rgba(225, 227, 223, 0.38)',
    backdrop: 'rgba(17, 20, 19, 0.7)3)',
  },
}

const theme = {
  ...DefaultTheme,
  custom: darkTheme.custom,
  colors: darkTheme.colors, // Copy it from the color codes scheme and then use it here
}

const { DarkTheme } = adaptNavigationTheme({ reactNavigationDark: NavTheme })

const navTheme = {
  ...DarkTheme,
  dark: true,
}

export type TAppTheme = typeof theme

export const useAppTheme = () => useTheme<TAppTheme>()

// TODO ? - https://reactnative.dev/docs/statusbar

const App: React.FC = () => {
  registerTranslation('cs', cs)
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={navTheme}>
        <GqlProvider>
          <SafeAreaProvider>
            <CategoriesProvider>
              <SensorValueProvider>
                <ActuatorValueProvider>
                  <Navigation />
                </ActuatorValueProvider>
              </SensorValueProvider>
            </CategoriesProvider>
          </SafeAreaProvider>
        </GqlProvider>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App
