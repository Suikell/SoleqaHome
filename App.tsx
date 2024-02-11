import 'react-native-gesture-handler'

import * as React from 'react'
import { Text } from 'react-native'
import { PaperProvider } from 'react-native-paper'

const App: React.FC = () => {
  return (
    // TODO - use theme from PaperProvider instead of creating own ThemeProvider
    <PaperProvider>
      {/* <ThemeProvider> */}
        <Text>App</Text>
        {/* <Navigation/> */}
      {/* </ThemeProvider> */}
    </PaperProvider>
  )
}

export default App
