import {
  signOut,
  createUserWithEmailAndPassword,
  User,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { AuthUser } from '@/context/auth/auth-interface'

enum AuthEndpoints {
  LOGIN = '/auth/login',
  VALIDATE_USER = '/auth/validation-status',
}

const getFirebaseAuthUser = async () => {
  try {
    const user = await new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        unsubscribe() // Stop observing after the first call
        resolve(user)
      }, reject)
    })
    return user as User | null
  } catch (_) {
    return null
  }
}

const getAuthUserFromFirebaseUser = (user: User) => {
  if (!user) {
    return null
  }
  return {
    name: user.displayName ?? '',
    email: user.email ?? '',
    id: user.uid ?? '',
  } as AuthUser
}

class AuthService {
  static async signinWithEmailAndPasssword(email: string, passowrd: string) {
    try {
      const authData = await signInWithEmailAndPassword(auth, email, passowrd)

      return {
        isSignedIn: true,
        userData: getAuthUserFromFirebaseUser(authData.user),
      }
    } catch (err) {
      return {
        isSignedIn: false,
        userData: null,
      }
    }
  }

  static async signupWithEmailAndPasssword(email: string, passowrd: string) {
    try {
      const authData = await createUserWithEmailAndPassword(auth, email, passowrd)

      return {
        isSignedIn: true,
        userData: getAuthUserFromFirebaseUser(authData.user),
      }
    } catch (err) {
      return {
        isSignedIn: false,
        userData: null,
      }
    }
  }

  static async validateAuth() {
    const user = await getFirebaseAuthUser()
    if (user) {
      return {
        isAuthenticated: true,
        user: getAuthUserFromFirebaseUser(user),
      }
    }
    return {
      isAuthenticated: false,
      user: null,
    }
  }

  static async signout() {
    await signOut(auth)
  }

  static async signOnUsingGoogle() {
    const googleProvider = new GoogleAuthProvider()
    try {
      const authData = await signInWithPopup(auth, googleProvider)

      return {
        isSignedIn: true,
        userData: getAuthUserFromFirebaseUser(authData.user),
      }
    } catch (err) {
      return {
        isSignedIn: false,
        userData: null,
      }
    }
  }
}

export default AuthService
