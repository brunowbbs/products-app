import {createStore, applyMiddleware, compose} from 'redux';

import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './modules/rootReducer';

import ReactotronConfig from '../../ReactotronConfig';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), ReactotronConfig.createEnhancer!()),
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
