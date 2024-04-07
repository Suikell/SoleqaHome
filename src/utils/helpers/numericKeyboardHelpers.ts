import { Platform } from 'react-native'

export const getNumericKeyboardType = () => {
  return Platform.OS === 'ios' ? `numbers-and-punctuation` : `decimal-pad`
}

export const isTextValid = (text: string) => {
  // regex to check if the input is a number, handling both comma and dot as decimal separator
  // also allows to end with a comma or dot
  const isNumber = /^-?\d*([.,]\d{0,2})?$/
  return isNumber.test(text)
}

export const getTextNumber = (text: string) => {
  const withReplacedComma = text.replace(',', '.')
  return parseFloat(withReplacedComma)
}
