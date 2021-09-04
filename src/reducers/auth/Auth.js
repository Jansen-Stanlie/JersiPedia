import {LOGIN_USER, REGISTER_USER} from '../../actions/AuthAction';

const initialState = {
  registerLoading: false,
  registerResult: false,
  registerError: false,

  loginLoading: false,
  loginResult: false,
  loginError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      console.log('masuk regis', action);
      return {
        ...state,
        registerLoading: action.payload.loading,
        registerResult: action.payload.data,
        registerError: action.payload.error,
      };
    case LOGIN_USER:
      console.log('masuk Login', action);
      return {
        ...state,
        loginLoading: action.payload.loading,
        loginResult: action.payload.data,
        loginError: action.payload.error,
      };
    default:
      return state;
  }
}
