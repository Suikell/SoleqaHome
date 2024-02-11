// Imports of components, hooks, etc.
import React, { useState } from "react"

import { Pressable, StyleSheet, Text, View } from "react-native"

// Definition of styles for MyComponent
const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: `yellow`,
  },
})

// Newly created customized component
export const MyComponent = () => {
  // State to store isVisible variable
  const [isVisible, setIsVisible] = useState(true)

  //   Function that handles what happens on click of the button
  const onClick = () => {
    // Setting the state
    // Reads previous value and returns the opposite
    // if isVisible = true => set to false
    // if isVisible = false => set to true
    setIsVisible((prev) => !prev)
  }

  // React Native's components must return JSX
  return (
    // This is JSX
    <View>
      {/* React Native's core component for container  */}
      {/* React Native's component for element that is clickable - like button */}
      <Pressable style={styles.button} onPress={onClick}>
        {/* Core component for text */}
        <Text>Button</Text>
      </Pressable>
      {/* Condition based on the state */}
      {isVisible && <Text>Hello, world!</Text>}
    </View>
  )
}
