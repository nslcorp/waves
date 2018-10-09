import React from 'react';
import { connect } from 'react-redux';

import RegisterForm from './form/index';
import { doRegisterUser } from '../../user/actions';

const RegisterPage = () => (
  <div className="page_wrapper">
    <div className="container">
      <div className="register_login_container">
        <div className="left">
          <RegisterForm
            onSubmit={values => this.props.doRegisterUser(values, this.props.history)}
          />
        </div>
      </div>
    </div>
  </div>
);

export default connect(
  null,
  { doRegisterUser }
)(RegisterPage);
