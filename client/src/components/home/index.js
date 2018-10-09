import React, { Component } from 'react';
import { connect } from 'react-redux';

import { doGetProductsByArrival, doGetProductsBySell } from './actions';
import { getByArrival, getBySell } from './reducer';
import Slider from './slider';
import Promotions from './promotions';
import Cards from '../../shared/cards';

class Home extends Component {
  componentDidMount() {
    this.props.doGetProductsByArrival();
    this.props.doGetProductsBySell();
  }

  render() {
    return (
      <div>
        <Slider />
        <Cards list={this.props.productsBySell} title="Best Selling guitars" />
        <Promotions />
        <Cards list={this.props.productsByArrival} title="New arrivals" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productsByArrival: getByArrival(state),
  productsBySell: getBySell(state)
});
const withConnect = connect(
  mapStateToProps,
  { doGetProductsBySell, doGetProductsByArrival }
);

export default withConnect(Home);
