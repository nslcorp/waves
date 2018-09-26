import * as types from './types';
const initialState = {
  entities: [],
  skip: 0,
  limit: 4,
  size: 0,
  loading: false,
  grid: 'cards'
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return { ...state, loading: true };

    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        entities: payload.products,
        size: payload.size,
        skip: state.skip + state.limit
      };

    case types.GET_PRODUCTS_ERROR:
      return { ...state, loading: false, error: payload };

    case types.TOGGLE_GRID:
      return { ...state, grid: payload };

    default:
      return state;
  }
};

export const getLoading = state => state.products.loading;
export const getProducts = state => state.products.entities;
export const getSize = state => state.products.size;
export const getSkip = state => state.products.skip;
export const getLimit = state => state.products.limit;
export const getGrid = state => state.products.grid;
