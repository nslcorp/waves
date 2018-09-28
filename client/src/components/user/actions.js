import axios from 'axios';
import * as types from './types';

import api from '../../api';
const USER_SERVER = '/api/users';

export const doLoginUser = (values, history) => async dispatch => {
  dispatch({ type: types.LOGIN_USER_REQUEST });

  try {
    const user = await axios.post(USER_SERVER + '/login', values);
    dispatch({ type: types.LOGIN_USER_SUCCESS, payload: user.data });
    history.push('/user/dashboard');
  } catch (error) {
    dispatch({ type: types.LOGIN_USER_ERROR, payload: error });
  }
};

export const doRegisterUser = values => async dispatch => {
  dispatch({ type: types.REGISTER_USER_REQUEST });

  try {
    const user = await axios.post(USER_SERVER + '/register', values);
    dispatch({ type: types.REGISTER_USER_SUCCESS, payload: user.data });
  } catch (error) {
    dispatch({ type: types.REGISTER_USER_ERROR, payload: error });
  }
};

export const doAuth = () => async dispatch => {
  dispatch({ type: types.AUTH_USER_REQUEST });
  try {
    const user = await api.user.get('auth');

    dispatch({ type: types.AUTH_USER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: types.AUTH_USER_ERROR, payload: null });
  }
};

export const doLogout = history => async dispatch => {
  try {
    const user = await axios.get(USER_SERVER + '/logout');
    console.log('doLogout', user);
    dispatch({ type: types.LOGOUT_USER_SUCCESS });
    history.push('/register-login');
  } catch (error) {
    dispatch({ type: types.LOGOUT_USER_ERROR });
  }
};
