import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as selectors from './reducer';
import { doGetProducts } from './actions';
import LoadMore from './load-more';
import Header from './header';
import ProductList from './product-list';
import { getFilters } from '../filters/reducer';

class Products extends Component {
  componentDidMount() {
    this.props.doGetProducts(0, this.props.limit);
  }

  loadMoreCards = () => {
    const { skip, limit, filters, products } = this.props;
    this.props.doGetProducts(skip, limit, filters, products);
  };

  render() {
    return (
      <Fragment>
        <Header />
        <ProductList
          grid={this.props.grid}
          list={this.props.products}
          loading={this.props.loading}
        />
        <LoadMore limit={this.props.limit} size={this.props.size} loadMore={this.loadMoreCards} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: selectors.getLoading(state),
  skip: selectors.getSkip(state),
  limit: selectors.getLimit(state),
  size: selectors.getSize(state),
  products: selectors.getProducts(state),
  grid: selectors.getGrid(state),
  filters: getFilters(state)
});
export default connect(
  mapStateToProps,
  { doGetProducts }
)(Products);
