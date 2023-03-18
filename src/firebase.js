// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA35iFovB6aWA6J0TgBESh9L6Tr3HqB9cw",
    authDomain: "dojo-c7eef.firebaseapp.com",
    projectId: "dojo-c7eef",
    storageBucket: "dojo-c7eef.appspot.com",
    messagingSenderId: "568680566390",
    appId: "1:568680566390:web:10c99a8d2151884dd01957"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
