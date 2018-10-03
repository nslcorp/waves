import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Dashboard from './components/dashboard';
import Guitars from './components/guitars';

import Auth from './hoc/auth';
import AddProduct from './components/dashboard/admin/add-product';
import ManageCategories from 'components/dashboard/admin/manage-categories';
import GuitarDetail from './components/guitar-detail/index';

const Routes = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/guitars" component={Guitars} />
      <Route exact path="/guitars/:id" component={Auth(GuitarDetail, null)} />

      <Route exact path="/dashboard" component={Auth(Dashboard, true)} />
      <Route exact path="/admin/add-product" component={Auth(AddProduct, true)} />
      <Route exact path="/admin/manage-categories" component={Auth(ManageCategories, true)} />

      <Route exact path="/login" component={Auth(Login, true)} />
      <Route exact path="/register" component={Auth(Register, false)} />
    </Switch>
  </Layout>
);

export default Routes;
