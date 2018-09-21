// import * as types from './types';
const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // case SOME_REQUEST:
    //   return {};

    default:
      return state;
  }
};
