import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div className="Home">
      <h1>Welcome</h1>
      <Link to="/memory-game">Memory Game</Link>
    </div>
  );
};

export default Home;
