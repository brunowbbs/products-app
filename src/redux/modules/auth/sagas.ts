import Toast from 'react-native-toast-message';
import {call, put, takeLatest} from 'redux-saga/effects';

import {authUserFailure, authUserSuccess} from './actions';
import api from '../../../services/api';
import types from './types';
import {AnyAction} from 'redux';

export function* authSaga({payload}: AnyAction) {
  try {
    const {data} = yield call(api.post, '/signin', payload);
    yield put(authUserSuccess(data));
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Erro ao tentar entrar no aplicativo',
    });
    yield put(authUserFailure());
  }
}

// export default all([takeLatest(types.AUTH_USER_REQUEST, authUser)]);
export default takeLatest(types.AUTH_USER_REQUEST, authSaga);
