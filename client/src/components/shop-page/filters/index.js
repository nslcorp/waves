import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { doGetBrands, doGetWoods } from '../actions';
import * as selectors from '../reducer';
import * as productSelectors from '../products/reducer';
import * as constants from './constants';
import FilterList from '../../shared/filter-list';
import FilterListRadio from '../../shared/filter-list-radio';
import { doGetProducts } from '../products/actions';

class Filters extends Component {
  state = {
    brand: [],
    frets: [],
    wood: [],
    price: []
  };
  componentDidMount() {
    this.props.doGetBrands();
    this.props.doGetWoods();
  }

  handleFiltersChange = (data, category) => {
    if (category === 'price') {
      const priceObj = constants.prices.find(price => price._id === data);
      return this.setState({ [category]: priceObj.array });
    }

    this.setState({ [category]: data }, () =>
      this.props.doGetProducts(this.props.skip, this.props.limit, this.state)
    );
  };

  render() {
    return (
      <Fragment>
        <FilterList
          open
          title="Brands"
          list={this.props.brand}
          checked={this.state.brand}
          onFiltersChange={filters => this.handleFiltersChange(filters, 'brand')}
        />
        <FilterList
          title="Frets"
          list={constants.frets}
          checked={this.state.frets}
          onFiltersChange={filters => this.handleFiltersChange(filters, 'frets')}
        />
        <FilterList
          title="Woods"
          list={this.props.wood}
          checked={this.state.wood}
          onFiltersChange={filters => this.handleFiltersChange(filters, 'wood')}
        />
        <FilterListRadio
          title="Price"
          list={constants.prices}
          onFiltersChange={filters => this.handleFiltersChange(filters, 'price')}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  brand: selectors.getBrand(state),
  wood: selectors.getWood(state),
  skip: productSelectors.getSkip(state),
  limit: productSelectors.getLimit(state)
});
const withConnect = connect(
  mapStateToProps,
  { doGetBrands, doGetWoods, doGetProducts }
);

export default withConnect(Filters);
