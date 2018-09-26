import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from '../components/user/reducer';
import product from '../components/product/reducer';
import shop from '../components/shop-page/reducer';

export default combineReducers({
  form,
  user,
  product,
  shop
});
