import firebase from "firebase/app";
import '@firebase/firestore'


const app = firebase.initializeApp( {
    apiKey: "AIzaSyBXLevBQ9-HaGPSnWU9Qwm9mqkqj5gd538",
    authDomain: "proyecto-recact.firebaseapp.com",
    projectId: "proyecto-recact",
    storageBucket: "proyecto-recact.appspot.com",
    messagingSenderId: "470541627524",
    appId: "1:470541627524:web:521daed013c864ca1252d1"
  });
  

  export const Firestore = () =>{
    return firebase.firestore(app)
  }
  