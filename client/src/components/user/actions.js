import * as types from './types';

import api from '../../api';
import { change } from 'redux-form';

export const doLoginUser = (values, history) => async dispatch => {
  dispatch({ type: types.LOGIN_USER_REQUEST });

  try {
    const user = await api.user.post('login', values);
    dispatch({ type: types.LOGIN_USER_SUCCESS, payload: user.data });
    history.push('/dashboard');
  } catch (error) {
    dispatch({ type: types.LOGIN_USER_ERROR, payload: error });
  }
};

export const doRegisterUser = (values, history) => async dispatch => {
  dispatch({ type: types.REGISTER_USER_REQUEST });
  try {
    const user = await api.user.post('register', values);
    dispatch({ type: types.REGISTER_USER_SUCCESS, payload: user.data });
    history.replace('/login');
  } catch (error) {
    dispatch({ type: types.REGISTER_USER_ERROR, payload: error });
  }
};

export const doAuth = () => async dispatch => {
  dispatch({ type: types.AUTH_USER_REQUEST });
  try {
    const user = await api.user.get('auth');

    await dispatch({ type: types.AUTH_USER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: types.AUTH_USER_ERROR, payload: null });
  }
};

export const doLogout = history => async dispatch => {
  try {
    await api.user.get('logout');
    dispatch({ type: types.LOGOUT_USER_SUCCESS });
    history.push('/register-error');
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

export const doAddToCart = id => async dispatch => {
  try {
    const cart = await api.user.post(`add-to-cart`, { id });
    dispatch({ type: types.ADD_TO_CART_SUCCESS, payload: cart });
  } catch (error) {
    console.error(error);
  }
};
