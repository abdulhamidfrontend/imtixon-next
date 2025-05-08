import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoPWNaP7r9KikfrpZNgFTF3X_owFexQhc",
  authDomain: "registerwith-9df25.firebaseapp.com",
  projectId: "registerwith-9df25",
  storageBucket: "registerwith-9df25.firebasestorage.app",
  messagingSenderId: "223519818213",
  appId: "1:223519818213:web:9244fcb9f0a096700b2f0c",
  measurementId: "G-9Q6XSTRQPG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { signInWithGoogle };
