export interface AuthUser {
  name: string
  email: string
  id: string
}

export enum AuthType {
  SIGNIN = 'SIGNIN',
  SIGNUP = 'SIGNUP',
}

export interface AuthInterface {
  isAuthenticated: boolean
  loading: boolean
  auth: (email: string, password: string) => Promise<void>
  signout: () => Promise<void>
  googleSignOn: () => Promise<void>
  getAuthToken: () => string
  authErrors: Record<string, string>
  user: AuthUser | null
  authType: AuthType
  changeAuthType: (authType: AuthType) => void
}

export const authStateDefaultValues: AuthInterface = {
  isAuthenticated: false,
  loading: true,
  auth: async (email: string, password: string) => {},
  signout: async () => {},
  googleSignOn: async () => {},
  getAuthToken: () => '',
  authErrors: {},
  user: null,
  authType: AuthType.SIGNIN,
  changeAuthType: () => {},
}
