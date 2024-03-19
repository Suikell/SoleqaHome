import * as React from 'react'

/**
 * Creates React context, exports its provider and a hook to use it.
 */
export const createContext = <T>(name: string, defaultValue?: T) => {
  const context = React.createContext<T | undefined>(defaultValue ?? undefined)

  const useContext = () => {
    const contextValue = React.useContext(context)

    if (contextValue === undefined) {
      throw new Error(`${name}Provider is missing from the tree`)
    }

    return contextValue
  }

  return [context.Provider, useContext] as const
}
