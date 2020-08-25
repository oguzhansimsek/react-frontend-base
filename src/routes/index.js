import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Home, Login, About } from 'pages';

import PublicRoute from 'routes/public.route';
import PrivateRoute from 'routes/private.route';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login">
          <Login />
        </PublicRoute>
        <PrivateRoute path="/about">
          <About />
        </PrivateRoute>
        <PrivateRoute path="/*">
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default AppRouter;
