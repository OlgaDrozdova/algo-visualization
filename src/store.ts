import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const isDevelopment = process.env.NODE_ENV === 'development';
const configureStore = () => {
  const buildAccordingEnv = isDevelopment
    ? compose(applyMiddleware(sagaMiddleware), (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
    : applyMiddleware(sagaMiddleware);

  const createdStore = createStore(reducers, buildAccordingEnv);

  sagaMiddleware.run(sagas);

  return createdStore;
};

const store = configureStore();

export default store;