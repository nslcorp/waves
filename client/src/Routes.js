import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import RegisterLogin from './components/register-login';
import Register from './components/register-login/register';
import Dashboard from './components/dashboard';
import ShopPage from './components/shop-page';

import Auth from './components/hoc/auth';
import AddProduct from './components/admin/add-product';
import ManageCategories from 'components/admin/manage-categories';

const Routes = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/product-detail/:id" component={Auth(RegisterLogin, null)} />
      <Route exact path="/user/dashboard" component={Auth(Dashboard, true)} />
      <Route exact path="/admin/add-product" component={AddProduct} />
      <Route exact path="/admin/manage-categories" component={ManageCategories} />

      <Route exact path="/register-login" component={Auth(RegisterLogin, false)} />
      <Route exact path="/register" component={Auth(Register, false)} />
    </Switch>
  </Layout>
);

export default Routes;
