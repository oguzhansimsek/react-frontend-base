import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persistConfig = {
  key: 'react-frontend-base',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = (initialState) => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
  }

  const composed = [applyMiddleware(...middlewares)];

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-underscore-dangle
    const devExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    if (devExtension) {
      composed.push(devExtension);
    }
  }

  const store = createStore(persistedReducer, initialState, compose(...composed));
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
