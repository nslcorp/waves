import * as types from './types';
const initialState = {
  entities: [],
  skip: 0,
  limit: 6,
  size: 3,
  loading: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return { ...state, loading: true };

    case types.GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, entities: payload.products, size: payload.size };

    case types.GET_PRODUCTS_ERROR:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export const getLoading = state => state.products.loading;
export const getProducts = state => state.products.entities;
export const getSize = state => state.products.size;
export const getSkip = state => state.products.skip;
export const getLimit = state => state.products.limit;
