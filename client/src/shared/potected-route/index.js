import React from 'react';
import PropTypes from 'prop-types';
import withAuth from '../../hoc/withAuth';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...restProps }) => {
  if (restProps.user.isAuth) return <Component {...restProps} />;

  return <Redirect to="/login" />;
};

ProtectedRoute.propTypes = {
  user: PropTypes.shape().isRequired
};

export default withAuth(ProtectedRoute);
