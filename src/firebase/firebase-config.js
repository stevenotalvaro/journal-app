import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyDqQRPC_Y6WCm98vqVahl4N_2hLDIPr8lM',
    authDomain: 'jounal-app-b570a.firebaseapp.com',
    projectId: 'jounal-app-b570a',
    storageBucket: 'jounal-app-b570a.appspot.com',
    messagingSenderId: '83387975640',
    appId: '1:83387975640:web:643e278f6c06fd504494ad',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {db, googleAuthProvider, firebase}
