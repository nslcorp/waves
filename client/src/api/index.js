import axios from 'axios';

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response && error.response.status >= 400 && error.response.status < 500;

  expectedError
    ? console.log('expected error:', error)
    : console.log('An unexpected error occurrred:', error);
  return Promise.reject(error);
});

const user = {
  get: url => axios.get(`/api/users/${url}`).then(response => response.data)
};

const products = {
  get: url => axios.get(`/api/product/${url}`).then(response => response.data),
  post: (url, data) => axios.post(`/api/product/${url}`, data).then(response => response.data)
};

export default {
  user,
  products
};
