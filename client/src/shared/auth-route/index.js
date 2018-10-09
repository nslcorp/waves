import React from 'react';
import PropTypes from 'prop-types';
import withAuth from './hoc/withAuth';
import { Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, ...restProps }) => {
  if (restProps.user.isAuth) return <Redirect to="/" />;

  return <Component {...restProps} />;
};

AuthRoute.propTypes = {
  user: PropTypes.shape().isRequired
};

export default withAuth(AuthRoute);
