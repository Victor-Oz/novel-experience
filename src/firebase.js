// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0etjKtN-KII3XEffxR3bNbFsONjzmvsg",
  authDomain: "novel-experience-4f69a.firebaseapp.com",
  projectId: "novel-experience-4f69a",
  storageBucket: "novel-experience-4f69a.appspot.com",
  messagingSenderId: "1021894391686",
  appId: "1:1021894391686:web:dd64ea05c2ee4f3a5fde07"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);









