import * as types from './types';
const initialState = {
  byArrival: [],
  bySell: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_BY_ARIVAL:
      return { ...state, byArrival: payload };

    case types.GET_PRODUCTS_BY_SELL:
      return { ...state, bySell: payload };

    default:
      return state;
  }
};

export const getBySell = state => state.home.bySell;
export const getByArrival = state => state.home.byArrival;
