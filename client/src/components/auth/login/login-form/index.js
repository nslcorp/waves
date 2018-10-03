import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import LoginForm from './form/index';
import { doLoginUser } from '../../../user/actions';

const withConnect = connect(
  null,
  { doLoginUser }
);

const LoginFormContainer = props => (
  <LoginForm onSubmit={values => props.doLoginUser(values, props.history)} />
);

export default compose(
  withRouter,
  withConnect
)(LoginFormContainer);
