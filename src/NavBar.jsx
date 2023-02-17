import { Link, useMatch, useResolvedPath, NavLink} from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/Home" activeClassname="active" className="site-title">
        Site Name
      </NavLink>
      <ul>
        <NavLink activeClassname="active" to="/pricing">Pricing</NavLink>
        <NavLink activeClassname="active" to="/about">About</NavLink>
      </ul>
    </nav>
  )
}

