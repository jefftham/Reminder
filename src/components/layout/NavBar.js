import Link from 'next/link';
import ActiveLink from '../../hoc/ActiveLink';

const NavBar = () => (
  <div>
    <ActiveLink href="/">Home</ActiveLink>
    <ActiveLink href="/about">About</ActiveLink>
  </div>
);

export default NavBar;
