import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from '../components/user/reducer';
import home from '../components/home/reducer';
import filters from '../components/shop-page/filters/reducer';
import products from '../components/shop-page/products/reducer';

export default combineReducers({
  form,
  user,
  home,
  filters,
  products
});
