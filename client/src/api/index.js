import axios from 'axios';

// const products = {
//   get
// };
// const PRODUCT_SERVER = '/api/product';
// api.products.get('/articles?sortBy=sold&order=desc&limit=4');

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
