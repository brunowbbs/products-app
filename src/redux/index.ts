import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './modules/rootReducer';

import ReactotronConfig from '../../ReactotronConfig';
import rootSaga from './modules/rootSaga';

import persistReducers from './persistor';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistReducers(rootReducer),
  compose(applyMiddleware(sagaMiddleware), ReactotronConfig.createEnhancer!()),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;

export interface IAppState {
  auth: {
    user: {
      token: string;
      email: string;
    };
  };
}
