import React from 'react';
import { connect } from 'react-redux';

import LoginForm from './form';

const mapStateToProps = state => ({});

const withConnect = connect(null);

const ff = values =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(values);
    }, 1500);
  });

const LoginFormContainer = () => <LoginForm onSubmit={ff} />;

export default withConnect(LoginFormContainer);
