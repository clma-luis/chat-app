import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDN2cja-Jc0K5-JT0IaXAW4tgh6xYO8f-o",
    authDomain: "unichat-e99f5.firebaseapp.com",
    projectId: "unichat-e99f5",
    storageBucket: "unichat-e99f5.appspot.com",
    messagingSenderId: "930249841331",
    appId: "1:930249841331:web:7aac389ec03b8a6916eec6"
}).auth()
