import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <header className="Header">
      <Link to="/" className="logo">
        React Games
      </Link>
      <nav>
        <Link to="/memory-game">Memory Game</Link>
      </nav>
    </header>
  );
};

export default Header;
