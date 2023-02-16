/** @format */

export default function NavBar() {
  return (
    <nav className="nav">
      <a href='/Home' className='title'>
        Oz
      </a>
      <ul className='menu'>
        <li className="active">
          <a href='/Pricing'>Pricing</a>
        </li>
        <li>
          <a href='/About'>About</a>
        </li>
      </ul>
    </nav>
  );
}
