import {combineReducers} from 'redux';
import UserReducer from './user/User';

const rootReducer = combineReducers({
  UserReducer,
});

export default rootReducer;
