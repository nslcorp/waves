import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { doAuth } from '../../components/user/actions';
import * as selectors from '../../components/user/reducer';

export default (TargetComponent, redirect, adminRoute = null) => {
  class AuthCheck extends Component {
    componentDidMount() {
      if (!this.props.user.isAuth) {
        this.props.doAuth();
      }
    }

    componentWillReceiveProps(nextProps) {
      const { isAuth, isAdmin } = nextProps.user;

      if (nextProps.loading) return null;

      if (!isAuth && redirect) {
        this.props.history.replace('/login');
      } else {
        if (adminRoute && !isAdmin) {
          this.props.history.replace('/dashboard');
        } else if (redirect) {
          this.props.history.replace('/dashboard');
        }
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