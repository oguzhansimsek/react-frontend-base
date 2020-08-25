import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from 'routes';
import configureStore from 'redux-store/configureStore';

import { PersistGate } from 'redux-persist/integration/react';

import 'theme/styles/app.css';

window.isAuth = false;

const { store, persistor } = configureStore(undefined);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
