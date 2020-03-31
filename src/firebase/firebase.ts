import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyBM5PrJjabtEnAMfQBLdPD7Hbf1cq_hRCo",
    authDomain: "react-travelling.firebaseapp.com",
    databaseURL: "https://react-travelling.firebaseio.com",
    projectId: "react-travelling",
    storageBucket: "react-travelling.appspot.com",
    messagingSenderId: "453276838804",
    appId: "1:453276838804:web:660f5068067fe72eaffd81"
  };

  if(!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  

  export const auth = firebase.auth();
  export const db = firebase.database();

