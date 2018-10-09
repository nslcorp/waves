import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/layout';
import Home from './components/home';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Dashboard from './components/dashboard';
import Guitars from './components/guitars';
import AddProduct from './components/dashboard/admin/add-product';
import ManageCategories from './components/dashboard/admin/manage-categories';
import GuitarDetail from './components/guitar-detail/index';
import AuthRoute from './shared/auth-route';
import ProtectedRoute from './shared/potected-route';
import Cart from './components/dashboard/cart';
import PageNotFound from './components/page-not-found';

const Routes = () => (
  <Layout>
    <Switch>
      <Route exact path="/guitars" component={Guitars} />
      <Route exact path="/guitars/:id" component={GuitarDetail} />

      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <ProtectedRoute exact path="/dashboard/cart" component={Cart} />
      <ProtectedRoute exact path="/dashboard/admin/add-product" component={AddProduct} />
      <ProtectedRoute
        exact
        path="/dashboard/admin/manage-categories"
        component={ManageCategories}
      />

      <AuthRoute exact path="/login" component={Login} />
      <AuthRoute exact path="/register" component={Register} />

      <Route exact path="/" component={Home} />

      <Route component={PageNotFound} />
    </Switch>
  </Layout>
);

export default Routes;
