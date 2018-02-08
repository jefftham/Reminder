import Link from 'next/link';
import ActiveLink from '../../hoc/ActiveLink';

const NavBar = () => (
  <nav class="navbar navbar-light bg-light">
    <form class="form-inline">
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="/about">About</ActiveLink>
    </form>
  </nav>
);

export default NavBar;
