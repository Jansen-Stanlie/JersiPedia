import {combineReducers} from 'redux';
import UserReducer from './user/User';
import RajaOngkirReducer from './rajaOngkir/rajaOngkir';
import AuthReducer from './auth/Auth';

const rootReducer = combineReducers({
  UserReducer,
  RajaOngkirReducer,
  AuthReducer,
});

export default rootReducer;
