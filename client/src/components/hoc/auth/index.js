import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { doAuth } from '../../user/actions';
import * as selectors from '../../user/reducer';

export default (TargetComponent, redirect, adminRoute = null) => {
  class AuthCheck extends Component {
    componentDidMount() {
      !this.props.user.isAuth && this.props.doAuth(this.props.history);
    }

    componentWillReceiveProps(nextProps) {
      const { isAuth } = nextProps.user;

      if (isAuth && !redirect) {
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
