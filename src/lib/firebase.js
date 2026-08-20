import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDD4dFYxwcK-N2hhlRkhwIhauW-xEqdyfE',
  authDomain: 'big-s-code-portfolio.firebaseapp.com',
  projectId: 'big-s-code-portfolio',
  storageBucket: 'big-s-code-portfolio.firebasestorage.app',
  messagingSenderId: '772496263377',
  appId: '1:772496263377:web:bc5463a7a28cd6e7dd1df0',
  measurementId: 'G-DCR6D00R46',
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

isSupported().then((supported) => {
  if (supported) getAnalytics(app)
})