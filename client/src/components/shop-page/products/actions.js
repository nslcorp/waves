import * as types from './types';
import api from '../../../api';

export const doGetProducts = (skip, limit, filters = {}) => async dispatch => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  const data = { skip, limit, filters };
  const response = await api.products.post('shop', data);
  dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: response });
};
