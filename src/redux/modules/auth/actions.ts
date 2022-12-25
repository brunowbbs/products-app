import types from './types';

type Payload = {
  token: string;
  email: string;
};

type RequestPayload = {
  email: string;
  password: string;
};

export function authUserRequest(payload: RequestPayload) {
  return {
    type: types.AUTH_USER_REQUEST,
    payload,
  };
}

export function authUserSuccess(payload: Payload) {
  return {
    type: types.AUTH_USER_SUCCEESS,
    payload,
  };
}

export function authUserFailure() {
  return {
    type: types.AUTH_USER_FAILURE,
  };
}
