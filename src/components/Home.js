import React from 'react';
import { Link } from 'react-router-dom';
import games from '../gamesRoutes';

const Home = props => {
  return (
    <div className="Home">
      <div className="gameLinks">
        {games.map(g => (
          <Link key={g.slug} to={`/${g.slug}`}>{g.name}</Link>
        ))}
        <a className="comingSoon" href="#0">
          More to come...
        </a>
      </div>
    </div>
  );
};

export default Home;
