import * as types from './types';
import api from '../../../api/index';
import * as constants from './constants';
import { doGetProducts } from '../products/actions';

export const doGetBrands = () => async dispatch => {
  const response = await api.products.get('brands');
  dispatch({ type: types.GET_BRANDS, payload: response });
};

export const doGetWoods = () => async dispatch => {
  const response = await api.products.get('woods');
  dispatch({ type: types.GET_WOODS, payload: response });
};

export const handleFiltersChange = (data, category) => {
  if (category === 'price') {
    const priceObj = constants.prices.find(price => price._id === data);
    return this.setState({ [category]: priceObj.array }, () =>
      this.props.doGetProducts(this.props.skip, this.props.limit, this.state)
    );
  }

  this.setState({ [category]: data }, () =>
    this.props.doGetProducts(this.props.skip, this.props.limit, this.state)
  );
};

export const doToggleCheckbox = (data, filterType) => async dispatch => {
  dispatch({ type: types.TOGGLE_CHECKBOX, payload: { data, filterType } });
};

export const doToggleRadio = (data, filterType) => async dispatch => {
  const priceObj = constants.prices.find(price => price._id === data);
  console.log(priceObj);
  dispatch({ type: types.TOGGLE_RADIO, payload: { data: priceObj.array, filterType } });
};
