import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var config = {
    apiKey: "AIzaSyBdjtA6oXL44TIvAuzjJWCiRJfiuqardhU",
    authDomain: "wedding-rsvp-3a0b2.firebaseapp.com",
    databaseURL: "https://wedding-rsvp-3a0b2.firebaseio.com",
    projectId: "wedding-rsvp-3a0b2",
    storageBucket: "wedding-rsvp-3a0b2.appspot.com",
    messagingSenderId: "40741777669"
  };
  firebase.initializeApp(config);
  
  

  export default firebase