// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDal0f_Hr-dTciAjZFkj2NuEVjQ44lmf94",
  authDomain: "react-auth-48a4a.firebaseapp.com",
  projectId: "react-auth-48a4a",
  storageBucket: "react-auth-48a4a.appspot.com",
  messagingSenderId: "850932224393",
  appId: "1:850932224393:web:6caf77a71d81c4cd695158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)