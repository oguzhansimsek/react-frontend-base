import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import containerReduxState from 'redux-store/containers/session';

const Login = ({ login, isLogin }) => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const [data] = React.useState({
    email: 'admin@admin.com',
    password: '12345',
  });

  React.useEffect(() => {
    if (isLogin) {
      history.replace(from);
    }
  }, [isLogin]);

  return (
    <div className="Login">
      <button type="button" onClick={login.bind(this, data)}>
        Login
      </button>
    </div>
  );
};

export default connect(...containerReduxState)(Login);
