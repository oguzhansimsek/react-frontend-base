import React from 'react';

import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };

  if (window.isAuth) {
    window.isAuth = false;
  }

  const login = () => {
    window.isAuth = true;
    history.replace(from);
  };

  return (
    <div className="Login">
      <button type="button" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default Login;
