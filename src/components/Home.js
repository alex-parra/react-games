import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div className="Home">
      <div className="gameLinks">
        <Link to="/memory-game">Memory Game</Link>
        <a className="comingSoon" href="#0">More to come...</a>
      </div>
    </div>
  );
};

export default Home;
