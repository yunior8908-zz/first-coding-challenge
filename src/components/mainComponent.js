import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const LaunchesIndex = React.lazy(() => import('./launches/launchesIndex'));
const LaunchDetails = React.lazy(() => import('./launches/launchDetails'));

const MainComponent = () => (
  <Switch>
    <Route exact path="/" component={() => <Redirect to="launches" />} />
    <Route exact path="/launches" component={() => <LaunchesIndex />} />
    <Route exact path="/launch/:id" component={() => <LaunchDetails />} />
  </Switch>
);

export default MainComponent;
