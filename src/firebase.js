// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBidoDOkonC2oYsu34rhR9SMaABjaSmSwY",
  authDomain: "todo-list-with-react.firebaseapp.com",
  projectId: "todo-list-with-react",
  storageBucket: "todo-list-with-react.appspot.com",
  messagingSenderId: "1028387685184",
  appId: "1:1028387685184:web:fc6ce14c09710c8ef0b0a5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
