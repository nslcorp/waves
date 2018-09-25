import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from '../components/user/reducer';
import product from '../components/product/reducer';

export default combineReducers({
  form,
  user,
  product
});
