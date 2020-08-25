import React from 'react';
import './theme/styles/app.css';
import ReactDOM from 'react-dom';

import AppRouter from 'routes';

window.isAuth = false;

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root'),
);
