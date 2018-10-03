import axios from 'axios/index';

export default {
  get: url => axios.get(`/api/product/${url}`).then(response => response.data),
  post: (url, data) => axios.post(`/api/product/${url}`, data).then(response => response.data)
};
