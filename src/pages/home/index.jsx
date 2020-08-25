import React from 'react';
import { connect } from 'react-redux';

import containerReduxState from 'redux-store/containers/session';

import styles from './styles.module.css';

const Home = ({ logout }) => {
  const log = () => {
    logout();
  };

  return (
    <div className={styles.main}>
      Hello World Home
      <button type="button" onClick={log}>
        Logout
      </button>
    </div>
  );
};

export default connect(...containerReduxState)(Home);
