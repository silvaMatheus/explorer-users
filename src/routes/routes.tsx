import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Home from '../pages/home/home';
import Users from '../pages/user/index';

export const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/:user" component={Users} />
  </Switch>
);
