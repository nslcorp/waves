import { combineReducers } from 'redux';
import user from '../components/user/reducer';
import { reducer as form } from 'redux-form';

export default combineReducers({
  form,
  user
});
