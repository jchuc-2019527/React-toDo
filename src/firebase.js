// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB99WkpC2eCyv3SJPY36ZQjwmaxPZ_QOzE",
  authDomain: "preuba3-4f095.firebaseapp.com",
  projectId: "preuba3-4f095",
  storageBucket: "preuba3-4f095.appspot.com",
  messagingSenderId: "767610219599",
  appId: "1:767610219599:web:632eda3d3590bb4b504e3a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
