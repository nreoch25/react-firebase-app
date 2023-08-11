import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABSOwXOmUrrABxN2J7OcdiA4rS700ayxo",
  authDomain: "crwn-clothing-db-eb1c2.firebaseapp.com",
  projectId: "crwn-clothing-db-eb1c2",
  storageBucket: "crwn-clothing-db-eb1c2.appspot.com",
  messagingSenderId: "620601002814",
  appId: "1:620601002814:web:5fc5acbc6339c1d5f73a6f",
};

const firebaseApp = initializeApp(firebaseConfig);

console.log({ signInWithRedirect, firebaseApp });

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
