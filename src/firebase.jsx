import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0etjKtN-KII3XEffxR3bNbFsONjzmvsg",
  authDomain: "novel-experience-4f69a.firebaseapp.com",
  projectId: "novel-experience-4f69a",
  storageBucket: "novel-experience-4f69a.appspot.com",
  messagingSenderId: "1021894391686",
  appId: "1:1021894391686:web:dd64ea05c2ee4f3a5fde07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

// collection ref
const colRef = collection(db, "subscribers");

// get collection data
// getDocs(colRef)
//   .then((snapshot) => {
//     // console.log(snapshot.docs)
//     let subcribers = [];
//     snapshot.docs.forEach((doc) => {
//       subcribers.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(subcribers);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// adding docs
// const addBookForm = document.querySelector(".add");
// addBookForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   addDoc(colRef, {
//     title: addBookForm.title.value,
//     author: addBookForm.author.value,
//   }).then(() => {
//     // eslint-disable-next-line no-undef
//     console.log(subcribers);
//     addBookForm.reset();
//   });
// });
