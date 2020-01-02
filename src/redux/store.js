/* eslint-disable import/prefer-default-export */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import { rootSaga } from './actions/launchesActions';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
