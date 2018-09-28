import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { doAuth } from '../../user/actions';
import * as selectors from '../../user/reducer';

export default (TargetComponent, redirect, adminRoute = null) => {
  class AuthCheck extends Component {
    componentDidMount() {
      !this.props.user.isAuth && this.props.doAuth();
    }

    componentWillReceiveProps(nextProps) {
      const { isAuth } = nextProps.user;

      // if (!nextProps.user.isAuth) {
      //   if (redirect) {
      //     this.props.history.push('/register-login');
      //   }
      // } else {
      //   if (adminRoute && !nextProps.user.isAdmin) {
      //     this.props.history.push('/user/dashboard');
      //     console.log('to dashboard1');
      //   } else {
      //     console.log('redirect', redirect);
      //     if (redirect === false) {
      //       this.props.history.push('/user/dashboard');
      //       console.log('to dashboard2');
      //     }
      //   }
      // }

      if (isAuth && !redirect) {
        console.log('to dashboard');
        this.props.history.push('/user/dashboard');
      } else if (!isAuth && redirect) {
        this.props.history.push('/register-login');
      }
    }

    render() {
      if (this.props.loading) {
        return (
          <div className="main_loader">
            <CircularProgress style={{ color: '#2196F3' }} />
          </div>
        );
      }

      return <TargetComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    user: selectors.getUser(state),
    loading: selectors.getLoading(state)
  });

  return connect(
    mapStateToProps,
    { doAuth }
  )(AuthCheck);
};
