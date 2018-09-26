import * as types from './types';
const initialState = {
  brand: [],
  wood: [],
  products: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_BRANDS:
      return { ...state, brand: payload };

    case types.GET_WOODS:
      return { ...state, wood: payload };

    default:
      return state;
  }
};

export const getBrand = state => state.shop.brand;
export const getWood = state => state.shop.wood;
