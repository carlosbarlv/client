import { combineReducers } from 'redux';
import login from './login';
import user from './user';
import business from './business';

export default combineReducers({
  business,
  login,
  user,
});
