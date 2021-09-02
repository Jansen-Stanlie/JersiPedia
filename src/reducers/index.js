import {combineReducers} from 'redux';
import UserReducer from './user/User';
import RajaOngkirReducer from './rajaOngkir/rajaOngkir';

const rootReducer = combineReducers({
  UserReducer,
  RajaOngkirReducer,
});

export default rootReducer;
