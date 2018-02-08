import { withRouter } from 'next/router';

const ActiveLink = ({ children, router, href }) => {
  const defaultStyle = {
    marginRight: 10,
    color: router.pathname === href ? 'red' : 'blue',
  };

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={defaultStyle}>
      {children}
    </a>
  );
};

export default withRouter(ActiveLink);
