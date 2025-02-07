import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VANLIFE
      </Link>
      <nav>
        <NavLink to="host">Host</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="vans">Vans</NavLink>
      </nav>
    </header>
  );
}

export default Header;
