/** @format */
import React, { useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";

function InfoCollector() {
  const colRef = collection(db, "subscribers");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  getDocs(colRef)
    .then((snapshot) => {
      // console.log(snapshot.docs)
      let subcribers = [];
      snapshot.docs.forEach((doc) => {
        subcribers.push({ ...doc.data(), id: doc.id });
      });
      console.log(subcribers);
    })
    .catch((err) => {
      console.log(err.message);
    });

  const shoot = () => {
    e.preventDefault();
    addDoc(colRef, {
      name: formData.name.value,
      email: formData.email.value,
    }).then(() => {
      // eslint-disable-next-line no-undef
      console.log(subcribers);
      console.log("hi");
      addBookForm.reset();
      // });
    });
  };
  return (
    <div className="input-container">
      <div className="top-input-container">
        <div className="h3 red">Craving new experiencees but</div>
        <div className="h3 purple">Don't know where to start ?</div>
        <p>You just missed the summer edition.</p>
        <p className="h3">We’ll keep you posted.</p>
      </div>
      <form className="input-field-container  add">
        <input
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="first-name"
          type="text"
          placeholder="   First Name"
          value={formData.name}
        />
        <input
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="last-name"
          type="text"
          placeholder="   Email Address"
          value={formData.email}
        />
        <button type="submit" className="submit-btn " onClick={shoot}>
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default InfoCollector;
