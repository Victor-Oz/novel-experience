/** @format */

import { Link, useMatch, useResolvedPath, NavLink } from "react-router-dom";
import MenuButton from "./components/MenuButton.jsx";

export default function Navbar() {
  return (
    <nav className='nav'>
      <NavLink to='/Home' activeClassname='active' className='site-title'>
        OZ
      </NavLink>
      <ul>
        <MenuButton />
      </ul>
    </nav>
  );
}
