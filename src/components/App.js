import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import DeadEnd from '~/components/DeadEnd';
import Header from '~/components/Header';
import Home from '~/components/Home';
import MemoryGame from '~/components/MemoryGame/MemoryGame';

const App = props => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/memory-game" component={MemoryGame} />
        <Route path="*" component={DeadEnd} />
      </Switch>
    </Router>
  );
};

export default App;
