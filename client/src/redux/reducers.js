import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from '../components/user/reducer';
import home from '../components/home/reducer';
import filters from '../components/guitars/filters/reducer';
import products from '../components/guitars/products/reducer';
import product from '../components/guitar-detail/reducer';

export default combineReducers({
  form,
  user,
  home,
  filters,
  products,
  product
});
