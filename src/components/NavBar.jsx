/** @format */

import { Link, useMatch, useResolvedPath, NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";

import MenuButton from "./MenuButton.jsx";
import { motion } from "framer-motion";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav className={toggle ? "navbar expanded" : "navbar"}>
      <NavLink to='/Home' activeclassname='active' id='site-title'>
        <img     src='/logo.png'
          alt='site logo ' id='site-title' />
      </NavLink>
      <div className='toggle-icon' onClick={handleToggle}>
        {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
      </div>
      <ul className='links'>
      <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
