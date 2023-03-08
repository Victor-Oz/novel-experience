/** @format */

import { Link, useMatch, useResolvedPath, NavLink } from "react-router-dom";
import MenuButton from "./MenuButton.jsx";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className='nav'>
      <NavLink to='/Home' activeClassname='active' id='site-title'>
        <img     src='/logo.png'
          alt='site logo ' id='site-title' />
      </NavLink>
      <ul className='menu'>
        <MenuButton className='menu' width='42' height='42' />
      </ul>
    </nav>
  );
}
