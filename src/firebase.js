// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzv2D7uDuXUjCf1kZKsXllhPh9NGAiMoY",
  authDomain: "earthly-solutions.firebaseapp.com",
  projectId: "earthly-solutions",
  storageBucket: "earthly-solutions.appspot.com",
  messagingSenderId: "1087614563356",
  appId: "1:1087614563356:web:cb15650a335775adf21bd9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};
