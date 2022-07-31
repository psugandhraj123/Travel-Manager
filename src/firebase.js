import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDP1SLKa64ELiMlSJiIhHSsBZB4QY_C0eE",
  authDomain: "travel-f11bb.firebaseapp.com",
  projectId: "travel-f11bb",
  storageBucket: "travel-f11bb.appspot.com",
  messagingSenderId: "925994261191",
  appId: "1:925994261191:web:875304355917794536fce2",
  measurementId: "G-ZVTLYWM7SQ",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
