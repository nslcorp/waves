import axios from 'axios/index';

// axios.defaults.baseURL = process.env.API_URL;

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response && error.response.status >= 400 && error.response.status < 500;

  expectedError
    ? console.log('expected error:', error)
    : console.log('An unexpected error occurrred:', error);
  return Promise.reject(error);
});
