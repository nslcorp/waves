import * as types from './types';
import api from '../../api/index';

export const doGetProductsBySell = () => async dispatch => {
  const data = await api.products.get(`articles?sortBy=sold&order=desc&limit=4`);
  dispatch({ type: types.GET_PRODUCTS_BY_SELL, payload: data });
};

export const doGetProductsByArrival = () => async dispatch => {
  const data = await api.products.get(`articles?sortBy=createdAt&order=desc&limit=4`);
  dispatch({ type: types.GET_PRODUCTS_BY_ARIVAL, payload: data });
};
