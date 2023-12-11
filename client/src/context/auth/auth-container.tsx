import React, { FC, PropsWithChildren, useState, useLayoutEffect, useRef } from 'react'
import { AuthType, authStateDefaultValues } from './auth-interface'
import { AuthProvider } from './auth-context'
import AuthService from '@/services/auth-service'
import { usePathname, useRouter } from 'next/navigation'
import { validateEmailAndPassowrd } from '@/shared/utils/auth.utils'

const AuthContainer: FC<PropsWithChildren> = ({ children }) => {
  const [authState, setAuthState] = useState(authStateDefaultValues)
  const router = useRouter()
  const pathname = usePathname()
  const isOnAuthPath = pathname.includes('auth')
  const { current: respectiveAuthService } = useRef({
    [AuthType.SIGNIN]: AuthService.signinWithEmailAndPasssword,
    [AuthType.SIGNUP]: AuthService.signupWithEmailAndPasssword,
  })

  const checkAuthOnLoad = async () => {
    const { isAuthenticated, user } = await AuthService.validateAuth()
    if (!isAuthenticated && !isOnAuthPath) {
      router.push('/auth')
    }
    if (isAuthenticated && isOnAuthPath) {
      router.push('/')
    }
    setAuthState((prevState) => ({
      ...prevState,
      loading: false,
      isAuthenticated,
      user,
    }))
  }

  useLayoutEffect(() => {
    checkAuthOnLoad()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setErrorInState = (authErrors: Record<string, string>) => {
    setAuthState((prevState) => ({
      ...prevState,
      authErrors,
    }))
    return
  }

  const auth = async (email: string, password: string) => {
    const { authErrors, hasErrors } = validateEmailAndPassowrd(email, password)
    if (hasErrors) {
      setErrorInState(authErrors)
      return
    }
    const { isSignedIn, userData } = await respectiveAuthService[authState.authType](email, password)
    if (isSignedIn) {
      setAuthState((prevState) => ({
        ...prevState,
        user: userData,
      }))
      router.push('/')
      return
    }
    setErrorInState({
      form: 'Wrong Credentials',
    })
    return
  }

  const googleSignOn = async () => {
    const { isSignedIn, userData } = await AuthService.signOnUsingGoogle()
    if (isSignedIn) {
      setAuthState((prevState) => ({
        ...prevState,
        user: userData,
      }))
      router.push('/')
      return
    }
    setErrorInState({
      form: 'Google SignOn failed...',
    })
  }

  const signout = async () => {
    await AuthService.signout()
    router.push('/auth')
    setAuthState({
      ...authStateDefaultValues,
      loading: false,
    })
  }

  const changeAuthType = (authType: AuthType) => {
    setAuthState((prevState) => ({
      ...prevState,
      authType,
    }))
  }

  if (authState.loading) {
    return null
  }
  return <AuthProvider value={{ ...authState, auth, signout, changeAuthType, googleSignOn }}>{children}</AuthProvider>
}

export default AuthContainer
