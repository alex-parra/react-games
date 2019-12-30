import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <header className="Header">
      <Link to="/" className="logo">
        <h1>React Games</h1>
      </Link>
      <a href="https://github.com/alex-parra" target="_blank" rel="noopener noreferrer">by Alex Parra</a>
    </header>
  );
};

export default Header;
