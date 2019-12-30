import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';

const MemoryGame = React.lazy(() => import('./MemoryGame/MemoryGame'));
const DeadEnd = React.lazy(() => import('./DeadEnd'));

const App = props => {
  return (
    <Router>
      <Header />
      <React.Suspense fallback={'Loading...'}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/memory-game" component={MemoryGame} />
          <Route path="*" component={DeadEnd} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default App;
