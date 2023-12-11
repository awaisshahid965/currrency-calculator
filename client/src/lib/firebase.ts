import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCURDkX0NGPUAAKTwUgueRn8AOPBo8xLc0',
  authDomain: 'rapidz-solution.firebaseapp.com',
  projectId: 'rapidz-solution',
  storageBucket: 'rapidz-solution.appspot.com',
  messagingSenderId: '1090326151575',
  appId: '1:1090326151575:web:8e82c524f16a16954544d2',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
