import axios from 'axios';
import * as types from './types';

const USER_SERVER = '/api/users';

export const doLoginUser = (values, history) => async dispatch => {
  dispatch({ type: types.LOGIN_USER_REQUEST });

  try {
    const user = await axios.post(USER_SERVER + '/login', values);
    dispatch({ type: types.LOGIN_USER_SUCCESS, payload: user.data });
    history.push('/');
  } catch (error) {
    dispatch({ type: types.LOGIN_USER_ERROR, payload: error });
  }
};
