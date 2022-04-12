// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_8iuyv32b13mBSalNh0nIimsHEB1P888",
  authDomain: "ema-john-simple-7c94c.firebaseapp.com",
  projectId: "ema-john-simple-7c94c",
  storageBucket: "ema-john-simple-7c94c.appspot.com",
  messagingSenderId: "465887113021",
  appId: "1:465887113021:web:89d1b403af03b16d581f54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;