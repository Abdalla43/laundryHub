import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWvWDCjDgxRhVHI1tO9KYf8m6a-xQ3wu8",
  authDomain: "laundryhub-899b4.firebaseapp.com",
  projectId: "laundryhub-899b4",
  storageBucket: "laundryhub-899b4.appspot.com",
  messagingSenderId: "470908333028",
  appId: "1:470908333028:web:011fb9760a6a095533f5f1",
  measurementId: "G-LSEKYD90HK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }