/**
 * Capitalizes the first letter of a string and converts the rest of the string to lowercase.
 */
export const toCapitalizedLowerCase = (input: string) => {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}
