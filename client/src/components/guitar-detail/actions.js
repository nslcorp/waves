import * as types from './types';
import api from '../../api';

export const doGetProduct = id => async dispatch => {
  dispatch({ type: types.GET_PRODUCT_REQUEST });

  const response = await api.products.get('articles_by_id?id=' + id);
  dispatch({
    type: types.GET_PRODUCT_SUCCESS,
    payload: response
  });
};

export const doAddProduct = formValues => async dispatch => {
  const data = {
    ...formValues,
    publish: formValues.publish === 'true',
    available: formValues.publish === 'true',
    shipping: formValues.publish === 'true'
  };
  try {
    const response = await api.products.post('article', data);
    dispatch({ type: types.ADD_PRODUCT_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: types.ADD_PRODUCT_ERROR, payload: error });
  }
};
