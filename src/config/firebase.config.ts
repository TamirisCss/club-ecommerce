import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDKO0Sq1lSCMrhWZdRQsbsTDCm08fUWEII',
  authDomain: 'club-ecommerce-49eb4.firebaseapp.com',
  projectId: 'club-ecommerce-49eb4',
  storageBucket: 'club-ecommerce-49eb4.appspot.com',
  messagingSenderId: '723189392702',
  appId: '1:723189392702:web:80b5f7651be0dd4407786f'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
