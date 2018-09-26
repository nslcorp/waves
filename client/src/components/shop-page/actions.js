import * as types from './types';
import api from '../../api';

export const doGetBrands = () => async dispatch => {
  const response = await api.products.get('brands');
  dispatch({ type: types.GET_BRANDS, payload: response });
};

export const doGetWoods = () => async dispatch => {
  const response = await api.products.get('woods');
  dispatch({ type: types.GET_WOODS, payload: response });
};
