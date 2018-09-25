import * as types from './types';
import axios from 'axios/index';

import api from '../../api';

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response && error.response.status >= 400 && error.response.status < 500;

  expectedError
    ? console.log('expected error:', error)
    : console.log('An unexpected error occurrred:', error);

  // toast.error("An unexpected error occurrred.");

  return Promise.reject(error);
});

export const doGetProductsBySell = () => async dispatch => {
  const data = await api.products.get(`articles?sortBy=sold&order=desc&limit=4`);
  dispatch({ type: types.GET_PRODUCTS_BY_SELL, payload: data });
};

export const doGetProductsByArrival = () => async dispatch => {
  const data = await api.products.get(`articles?sortBy=createdAt&order=desc&limit=4`);
  dispatch({ type: types.GET_PRODUCTS_BY_ARIVAL, payload: data });
};
