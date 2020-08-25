import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import containerReduxState from 'redux-store/containers/session';

const PrivateRoute = ({ isLogin, children, ...props }) => {
  return (
    <Route
      {...props}
      render={({ location }) => {
        return isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default connect(...containerReduxState)(PrivateRoute);
