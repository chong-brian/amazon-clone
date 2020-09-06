import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDL38gc1lH2OUcCdSXEnG753bKR5vtbxLU",
    authDomain: "clone-f5fa5.firebaseapp.com",
    databaseURL: "https://clone-f5fa5.firebaseio.com",
    projectId: "clone-f5fa5",
    storageBucket: "clone-f5fa5.appspot.com",
    messagingSenderId: "330574452919",
    appId: "1:330574452919:web:284929c6cc182b1c249532",
});

const auth = firebase.auth();

export { auth };