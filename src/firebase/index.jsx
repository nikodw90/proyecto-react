import firebase from "firebase/app";
import '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBkUlRNdARh87HzSjuzOyu3M5FwzULvqcA",
  authDomain: "proyecto-react-b270a.firebaseapp.com",
  projectId: "proyecto-react-b270a",
  storageBucket: "proyecto-react-b270a.appspot.com",
  messagingSenderId: "574752570496",
  appId: "1:574752570496:web:fc3a75df8809edff853a65"
};
const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)
  

  
  