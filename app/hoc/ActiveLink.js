import React from 'react';
import { withRouter } from 'next/router';

const ActiveLink = ({ children, router, href, prefetch }) => {
  const defaultStyle = {
    margin: '0px 5px 15px 0px',
    fontSize: '20px',
    width: '200px',
    // color: router.pathname === href ? 'red' : 'black',
  };

  const assignClasses =
    router.pathname === href
      ? 'btn btn-outline-primary active'
      : 'btn btn-outline-primary';

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  // prefetch the page, only work on production
  if (prefetch && prefetch === 'true') {
    // router.prefetch(href);
  }

  return (
    <button
      className={assignClasses}
      type='button'
      href={href}
      onClick={handleClick}
      style={defaultStyle}
    >
      {children}
    </button>
  );
};

export default withRouter(ActiveLink);
