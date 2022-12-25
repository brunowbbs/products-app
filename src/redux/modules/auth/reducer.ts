import types from './types';

const INITIAL_STATE = {
  user: {
    token: '',
    email: '',
  },
  loading: false,
  error: false,
};

type Action = {
  type: string;
  payload: {
    token: string;
    email: string;
  };
};

function authReducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case types.AUTH_USER_REQUEST: {
      return {...state, loading: true};
    }
    case types.AUTH_USER_SUCCEESS: {
      return {...state, loading: false, error: false, user: action.payload};
    }
    case types.AUTH_USER_FAILURE: {
      return {...state, loading: false, error: true};
    }
    case types.AUTH_USER_EMPTY: {
      return {
        ...state,
        loading: false,
        error: false,
        user: {token: '', email: ''},
      };
    }
  }
  return state;
}

export default authReducer;
