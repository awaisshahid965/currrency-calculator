import { createContext, useContext } from 'react'
import { AuthInterface, authStateDefaultValues } from './auth-interface'

const AuthContext = createContext<AuthInterface>(authStateDefaultValues)

export const AuthProvider = AuthContext.Provider

export const useAuthContext = () => useContext(AuthContext)
