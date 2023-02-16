/** @format */

export default function NavBar() {
  return (
    <nav className="nav">
      <a href='/' className='title'>
        Oz
      </a>
      <ul className='menu'>
        <li>
          <a href='/'>pricing</a>
        </li>
        <li>
          <a href='/'>About</a>
        </li>
      </ul>
    </nav>
  );
}
