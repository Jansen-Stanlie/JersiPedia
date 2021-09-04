import {REGISTER_USER} from '../../actions/AuthAction';

const initialState = {
  registerLoading: false,
  registerResult: false,
  registerError: false,
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

    default:
      return state;
  }
}
