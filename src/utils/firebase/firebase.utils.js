import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect, signInWithPopup, GoogleAuthProvider 
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAyalV19RzYS58K6Y7kLzImdT0KagGshlI",
    authDomain: "pstgems-db.firebaseapp.com",
    projectId: "pstgems-db",
    storageBucket: "pstgems-db.appspot.com",
    messagingSenderId: "4594561117",
    appId: "1:4594561117:web:811b318794d1853e00ddb4",
    measurementId: "G-SBKNXXV0G9"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    // essentially saying, give me the doc reference inside database 'db', under the collection 'users', with 'userAth.uid'
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);
  
    // if user data doesn't exists
    // create /set doc with the data from userAuth in my collection.

    if(!userSnapShot.exists()){
      const{ displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt
        });
      } catch(error){
          console.log('error creating the user', error.message);
      }
    }

    // if user exists
    return userDocRef;
  }