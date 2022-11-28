// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsTdtJcD-0VtDShZZBMkvigrokKrHbmu8",
  authDomain: "timetodrink-fbca8.firebaseapp.com",
  projectId: "timetodrink-fbca8",
  storageBucket: "timetodrink-fbca8.appspot.com",
  messagingSenderId: "731981175376",
  appId: "1:731981175376:web:6e941d5b5a8f89b2350f55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);