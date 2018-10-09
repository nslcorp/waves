import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegisterForm from './form/index';
import { doRegisterUser } from '../../user/actions';

class RegisterPage extends Component {
  render() {
    return (
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
        {/*<Dialog open={true}>*/}
        {/*<div className="dialog_alert">*/}
        {/*<div>Congradulations!!!</div>*/}
        {/*<div> You will be reridect to HOME..</div>*/}
        {/*</div>*/}
        {/*</Dialog>*/}
      </div>
    );
  }
}

export default connect(
  null,
  { doRegisterUser }
)(RegisterPage);
