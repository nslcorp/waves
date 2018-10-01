import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { doAuth } from '../../user/actions';
import * as selectors from '../../user/reducer';

export default (TargetComponent, redirect, adminRoute = null) => {
  class AuthCheck extends Component {
    componentDidMount() {
      if (!this.props.user.isAuth) {
        console.log('this.props.user.isAuth');
        this.props.doAuth();
      }
    }

    componentWillReceiveProps(nextProps) {
      console.log(this.props, nextProps);
      const { isAuth, isAdmin } = nextProps.user;

      if (nextProps.loading) return null;

      if (!isAuth && redirect) {
        this.props.history.push('/register-login');
      } else {
        if (adminRoute && !isAdmin) {
          this.props.history.push('/user/dashboard');
        } else if (redirect) {
          this.props.history.push('/user/dashboard');
        }
      }
    }

    render() {
      console.log(this.props);
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
