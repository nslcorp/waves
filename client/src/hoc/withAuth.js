import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getLoading, getUser } from '../components/user/reducer';
import { doAuth } from '../components/user/actions';

export default BaseComponent => {
  class AuthHOC extends Component {
    componentDidMount() {
      if (!this.props.user.isAuth && !this.props.loading) {
        this.props.doAuth();
      }
    }

    render() {
      if (this.props.loading) return <h1>Loading...</h1>;

      return <BaseComponent {...this.props} user={this.props.user} />;
    }
  }

  const mapStateToProps = state => ({ user: getUser(state), loading: getLoading(state) });
  return connect(
    mapStateToProps,
    { doAuth }
  )(AuthHOC);
};
