/** @format */

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const config = {
  firebase: {
    apiKey: "AIzaSyA35iFovB6aWA6J0TgBESh9L6Tr3HqB9cw",
    authDomain: "dojo-c7eef.firebaseapp.com",
    projectId: "dojo-c7eef",
    storageBucket: "dojo-c7eef.appspot.com",
    messagingSenderId: "568680566390",
    appId: "1:568680566390:web:10c99a8d2151884dd01957",
  },
};

export default config

initializeApp(config);

// init services
const db = getFirestore();
const auth = getAuth();


// collection ref
const colRef = collection(db, "books");

const provider = new GoogleAuthProvider();