import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      Header
      <ul>
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </ul>
    </div>
  );
}

export default Header;
