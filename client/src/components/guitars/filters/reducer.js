import * as types from './types';
const initialState = {
  brand: [],
  wood: [],
  filters: {
    brand: [],
    frets: [],
    wood: [],
    price: []
  }
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_BRANDS:
      return { ...state, brand: payload };

    case types.GET_WOODS:
      return { ...state, wood: payload };

    case types.ADD_BRANDS:
      return {
        ...state,
        brand: [...state.brand, payload]
      };

    case types.ADD_WOODS:
      return {
        ...state,
        wood: [...state.wood, payload]
      };

    case types.TOGGLE_CHECKBOX:
    case types.TOGGLE_RADIO:
      return {
        ...state,
        filters: {
          ...state.filters,
          [payload.filterType]: payload.data
        }
      };

    default:
      return state;
  }
};

export const getBrand = state => state.filters.brand;
export const getWood = state => state.filters.wood;
export const getFilters = state => state.filters.filters;
