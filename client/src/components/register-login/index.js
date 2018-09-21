import React from 'react';
import PropTypes from 'prop-types';

import Button from '../shared/button';
import LoginForm from './login-form';

const RegisterLogin = props => (
  <div className="page_wrapper">
    <div className="container">
      <div className="register_login_container">
        <div className="left">
          <h1>New customer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aliquam atque aut beatae blanditiis, distinctio dolore dolorem
            dolorum eaque exercitationem facilis ipsam itaque labore libero
            minus neque ratione. Provident, quas?
          </p>
          <Button title="Create an account" linkTo="/register" />
        </div>

        <div className="right">
          <h2>Registered customers</h2>
          <p>If you have an account, please Log in</p>
          <LoginForm />
        </div>
      </div>
    </div>
  </div>
);

RegisterLogin.propTypes = {};

export default RegisterLogin;
