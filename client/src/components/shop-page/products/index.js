import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from './reducer';
import { doGetProducts } from './actions';

class Products extends Component {
  state = {
    grid: ''
  };

  componentDidMount() {
    this.props.doGetProducts(0, this.props.limit);
  }

  render() {
    console.log(this.props.products, this.props);
    return (
      <div>
        <h3>Products</h3>
      </div>
    );
  }
}

Products.propTypes = {};

const mapStateToProps = state => ({
  loading: selectors.getLoading(state),
  skip: selectors.getSkip(state),
  limit: selectors.getLimit(state),
  size: selectors.getSkip(state),
  products: selectors.getProducts(state)
});
export default connect(
  mapStateToProps,
  { doGetProducts }
)(Products);
