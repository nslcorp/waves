import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import ShopPage from './components/shop-page';

import Auth from './components/hoc/auth';
import AddProduct from './components/admin/add-product';
import ManageCategories from 'components/admin/manage-categories';
import ProductPage from './components/product-page';

const Routes = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/product-detail/:id" component={Auth(ProductPage, null)} />

      <Route exact path="/dashboard" component={Auth(Dashboard, true)} />
      <Route exact path="/admin/add-product" component={Auth(AddProduct, true)} />
      <Route exact path="/admin/manage-categories" component={Auth(ManageCategories, true)} />

      <Route exact path="/login" component={Auth(Login, false)} />
      <Route exact path="/register" component={Auth(Register, false)} />
      <Route exact path="/register" component={Auth(Register, false)} />
    </Switch>
  </Layout>
);

export default Routes;
