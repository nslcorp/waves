import * as types from './types';
const initialState = {
  loading: false,
  item: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCT_REQUEST:
      return { ...state, loading: true };

    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        item: payload
      };

    case types.GET_PRODUCT_ERROR:
      return { ...state, loading: false, error: payload };

    case types.ADD_PRODUCT_SUCCESS:
      console.log('Product was added');
      return state;

    default:
      return state;
  }
};

export const getLoading = state => state.product.loading;
export const getProduct = state => state.product.item;
