import axios from 'axios';

// const products = {
//   get
// };
// const PRODUCT_SERVER = '/api/product';
// api.products.get('/articles?sortBy=sold&order=desc&limit=4');

const products = {
  get: url => axios.get(`/api/product/${url}`).then(response => response.data)
};

export default {
  products
};
