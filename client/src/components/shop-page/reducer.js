import * as types from './types';
const initialState = {
  brands: [],
  woods: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_BRANDS:
      return { ...state, brands: payload };

    case types.GET_WOODS:
      return { ...state, woods: payload };

    default:
      return state;
  }
};

export const getBrands = state => state.shop.brands;
export const getWoods = state => state.shop.woods;
