import React from 'react';
import { connect } from 'react-redux';

import containerReduxState from 'redux-store/containers/session';

const Home = ({ logout }) => {
  const log = () => {
    logout();
  };

  return (
    <div className="Home">
      Hello World Home
      <button type="button" onClick={log}>
        Logout
      </button>
    </div>
  );
};

export default connect(...containerReduxState)(Home);
