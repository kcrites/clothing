import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBN9JPB13xWtEs3Hk2hlFx8bbDYgcGi2V4",
    authDomain: "crwn-db-8a21f.firebaseapp.com",
    databaseURL: "https://crwn-db-8a21f.firebaseio.com",
    projectId: "crwn-db-8a21f",
    storageBucket: "crwn-db-8a21f.appspot.com",
    messagingSenderId: "659092756247",
    appId: "1:659092756247:web:68967ba765a6421bef8952",
    measurementId: "G-W6L2JJWMEJ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;