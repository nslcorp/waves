import * as types from './types';
import api from '../../../api/index';
import * as constants from './constants';

import _ from 'lodash';

export const doGetBrands = () => async dispatch => {
  const response = await api.products.get('brands');
  dispatch({ type: types.GET_BRANDS, payload: response });
};

export const doGetWoods = () => async dispatch => {
  const response = await api.products.get('woods');
  dispatch({ type: types.GET_WOODS, payload: response });
};

export const doAddBrand = values => async dispatch => {
  const data = _.mapKeys(values, () => 'name');
  const response = await api.products.post('brands', data);
  dispatch({ type: types.ADD_BRANDS, payload: response });
};
export const doAddWood = values => async dispatch => {
  const data = _.mapKeys(values, () => 'name');
  const response = await api.products.post('woods', data);
  dispatch({ type: types.ADD_WOODS, payload: response });
};

export const doToggleCheckbox = (data, filterType) => async dispatch => {
  dispatch({ type: types.TOGGLE_CHECKBOX, payload: { data, filterType } });
};

export const doToggleRadio = (data, filterType) => async dispatch => {
  const priceObj = constants.prices.find(price => price._id === data);
  dispatch({ type: types.TOGGLE_RADIO, payload: { data: priceObj.array, filterType } });
};
