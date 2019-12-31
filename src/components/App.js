import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';

import games from '../gamesRoutes';
const DeadEnd = React.lazy(() => import('./DeadEnd'));

const App = props => {
  return (
    <Router>
      <Header />
      <React.Suspense fallback={'Loading...'}>
        <Switch>
          <Route path="/" exact component={Home} />
          {games.map(g => (
            <Route key={g.slug} path={`/${g.slug}`} component={g.component} />
          ))}
          <Route path="*" component={DeadEnd} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default App;
