import axios from 'axios';
import * as types from './types';

import api from '../../api';
import { change } from 'redux-form';
const USER_SERVER = '/api/users';

export const doLoginUser = (values, history) => async dispatch => {
  dispatch({ type: types.LOGIN_USER_REQUEST });

  try {
    const user = await axios.post(USER_SERVER + '/login', values);
    dispatch({ type: types.LOGIN_USER_SUCCESS, payload: user.data });
    history.push('/dashboard');
  } catch (error) {
    dispatch({ type: types.LOGIN_USER_ERROR, payload: error });
  }
};

export const doRegisterUser = (values, history) => async dispatch => {
  dispatch({ type: types.REGISTER_USER_REQUEST });
  try {
    const user = await axios.post(USER_SERVER + '/register', values);
    dispatch({ type: types.REGISTER_USER_SUCCESS, payload: user.data });
    history.push('/dashboard');
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
    dispatch({ type: types.LOGOUT_USER_SUCCESS });
    history.push('/register-errorin');
  } catch (error) {
    dispatch({ type: types.LOGOUT_USER_ERROR });
  }
};

export const doUploadImage = (currFiles, files) => async dispatch => {
  let formData = new FormData();
  const config = { header: { 'content-type': 'multipart/form-data' } };
  formData.append('file', currFiles[0]);

  try {
    const response = await api.user.post('uploadimage', formData, config);
    const newFiles = [...files, response];
    dispatch(change('add-product', 'images', newFiles));
  } catch (error) {
    console.error(error);
  }
};

export const doRemoveImage = (id, files) => async dispatch => {
  try {
    await api.user.get(`removeimage?id=${id}`);
    const newFiles = files.filter(file => file.public_id !== id);
    dispatch(change('add-product', 'image', newFiles));
  } catch (error) {
    console.error(error);
  }
};
