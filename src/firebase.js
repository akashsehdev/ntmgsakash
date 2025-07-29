// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkjKoEnOU7npcfjxq4z3J5H3qCtQ10yGE",
  authDomain: "ntmgs-9e26e.firebaseapp.com",
  projectId: "ntmgs-9e26e",
  storageBucket: "ntmgs-9e26e.firebasestorage.app",
  // storageBucket: "ntmgs-9e26e.appspot.com",
  messagingSenderId: "285989667302",
  appId: "1:285989667302:web:66ad7f01f5c560fef89627",
  measurementId: "G-23458ZPRFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firestore database
const db = getFirestore(app);

// Export Firestore instance
export { db };