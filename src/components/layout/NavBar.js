import Link from 'next/link';
import ActiveLink from '../../hoc/ActiveLink';

const NavBar = () => (
  <nav className="navbar navbar-light bg-light">
    <form className="form-inline">
      <ActiveLink href="/" prefetch="true">
        Home
      </ActiveLink>
      <ActiveLink href="/about" prefetch="true">
        About
      </ActiveLink>
    </form>
  </nav>
);

export default NavBar;
