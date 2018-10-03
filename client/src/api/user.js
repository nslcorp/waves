import axios from 'axios/index';

export default {
  get: url => axios.get(`/api/users/${url}`).then(response => response.data),
  post: (url, data, config = {}) =>
    axios.post(`/api/users/${url}`, data, config).then(response => response.data)
};
