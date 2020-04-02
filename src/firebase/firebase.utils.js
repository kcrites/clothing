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

  export const createUserProfileDocument = async (userAuth, ...additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        //If snapshot doesn't exist, create user in DB with this data
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;