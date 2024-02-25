import * as React from 'react'

import { TMAuthUserVariables, useMAuthUser } from '~graphql/generated/graphql'

export type TLogin = TMAuthUserVariables

type TSignInResult = {
  wasSuccess: boolean
  message: string
}

/**
 * Handles login in form submit & validation
 */
export const useLoginUser = () => {
  const [submitting, setSubmitting] = React.useState(false)
  const [signInResult, setSignInResult] =
    React.useState<Nullable<TSignInResult>>(null)

  const [mLogin, { data, error, loading }] = useMAuthUser()

  React.useEffect(() => {
    if (!loading && error) {
      console.log('why?')
      setSubmitting(false)
      // TODO return signInResult and based on that show a snackBar (prop visible) wrapped in the portal
    }
  }, [error, loading])

  const validateUser = React.useCallback(
    async (formValues: TLogin) => {
      setSubmitting(true)
      setSignInResult(null)

      const { email, password } = formValues

      // fast client-side validations

      if (email.length === 0) {
        // TODO status toast
        // message: `Email can’t be empty.`,
        return
      }

      if (!isEmail(email)) {
        //   message: `Wrong format of the email.`,
        return
      }

      if (password.length === 0) {
        //   message: `Password can’t be empty.`,
        return
      }

      // attempt sign in

      await mLogin({
        variables: { email, password },
      })

      if (!loading && error) {
        console.log('whor here?')
        setSubmitting(false)
        return
      }

      setSubmitting(false)

      return data
    },
    [data, error, loading, mLogin],
  )

  console.log('loading', loading)
  console.log('error', error)
  return { validateUser, submitting, signInResult }
}

// * HELPERS

const isEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
