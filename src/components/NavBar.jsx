/** @format */

import { Link, useMatch, useResolvedPath, NavLink } from "react-router-dom";
import MenuButton from "./MenuButton.jsx";

export default function Navbar() {
  return (
    <nav className='nav'>
      <NavLink to='/Home' activeClassname='active' className='site-title'>
        OZ
      </NavLink>
      <ul>
        <MenuButton className='menu' width='92' height='92' />
      </ul>
    </nav>
  );
}
