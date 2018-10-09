import * as types from './types';
import api from '../../../api';

export const doGetProducts = (skip, limit, filters = {}, prevProducts = []) => async dispatch => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  const data = { skip, limit, filters };
  const response = await api.products.post('shop', data);
  dispatch({
    type: types.GET_PRODUCTS_SUCCESS,
    payload: {
      products: [...prevProducts, ...response.products],
      size: response.size,
      skip
    }
  });
};

export const doToggleGrid = grid => dispatch =>
  dispatch({ type: types.TOGGLE_GRID, payload: grid });
