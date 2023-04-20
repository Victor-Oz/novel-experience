/** @format */
import React, { useEffect } from "react";
// import firebase from "../firebase"
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   serverTimestamp,
// } from "firebase/firestore";

function InfoCollector() {
//   const db = getFirestore();
//   const colRef = collection(db, "users");

//   const addBookForm = document.querySelector(".add");
//   addBookForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     addDoc(colRef, {
//       title: addBookForm.name.value,
//       author: addBookForm.email.value,
//       createdAt: serverTimestamp(),
//     }).then(() => {
//       addBookForm.reset();
//     });
//   });
// const ref = firebase.firestore().collection("users")
  return (
    <div className="input-container">
      <div className="top-input-container">
        <div className="h3 red">Craving new experiencees but</div>
        <div className="h3 purple">Don't know where to start ?</div>
        <p>You just missed the summer edition.</p>
        <p className="h3">We’ll keep you posted.</p>
      </div>
      <form className="input-field-container add">
        <input
          className="first-name"
          type="text"
          placeholder="   First Name"
          name="name"
        />
        <input
          className="last-name"
          type="text"
          placeholder="   Email Address"
          name="email"
        />
        <button className="submit-btn">SUBSCRIBE </button>
      </form>
    </div>
  );
}

export default InfoCollector;
