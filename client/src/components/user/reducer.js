import * as types from './types';
const initialState = {
  loading: false,
  entities: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.AUTH_USER_REQUEST:
      return { ...state, loading: true };

    case types.AUTH_USER_SUCCESS:
      return { ...state, loading: false, entities: { ...payload } };

    case types.AUTH_USER_ERROR:
      return { ...state, loading: false };

    case types.LOGOUT_USER_SUCCESS:
      return { ...state, entities: {} };

    case types.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        entities: {
          ...state.entities,
          cart: payload
        }
      };

    default:
      return state;
  }
};

export const getUser = state => state.user.entities;
export const getLoading = state => state.user.loading;
