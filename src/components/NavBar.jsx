/** @format */

import { Link, useMatch, useResolvedPath, NavLink } from "react-router-dom";
import MenuButton from "./MenuButton.jsx";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className='nav'>
      <motion.NavLink
        animate={{ x: 100 , scale :1.2}}
        transition={{ delay: 1 }}
        to='/Home'
        activeClassname='active'
        className='site-title'>
        OZ
      </motion.NavLink>
      <ul>
        <MenuButton className='menu' width='92' height='92' />
      </ul>
    </nav>
  );
}
