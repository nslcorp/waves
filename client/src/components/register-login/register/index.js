import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { connect } from 'react-redux';

import RegisterForm from './form';
import { doRegisterUser } from '../../user/actions';

class RegisterPage extends Component {
  render() {
    return (
      <div className="page_wrapper">
        <div className="container">
          <div className="register_login_container">
            <div className="left">
              <RegisterForm onSubmit={this.props.doRegisterUser} />
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
