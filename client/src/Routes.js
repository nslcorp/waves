import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/hoc/layout';
import Home from './components/home';
import RegisterLogin from './components/register-login';

const Routes = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register-login" component={RegisterLogin} />
    </Switch>
  </Layout>
);

Routes.propTypes = {};

export default Routes;
