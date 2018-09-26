import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { doGetBrands, doGetWoods, doToggleCheckbox, doToggleRadio } from './actions';
import * as selectors from './reducer';
import * as productSelectors from '../products/reducer';
import * as constants from './constants';
import FilterList from './filter-list';
import FilterListRadio from './filter-list-radio';
import { doGetProducts } from '../products/actions';

class Filters extends Component {
  componentDidMount() {
    this.props.doGetBrands();
    this.props.doGetWoods();
  }

  handleToggleCheckbox = (data, filterType) => {
    this.props.doToggleCheckbox(data, filterType);
    const filters = { ...this.props.filters, [filterType]: data };
    this.props.doGetProducts(0, this.props.limit, filters);
  };

  handleToggleRadio = (value, filterType) => {
    const { limit } = this.props;

    this.props.doToggleRadio(value, filterType);
    const priceObj = constants.prices.find(price => price._id === value);
    const filters = { ...this.props.filters, [filterType]: priceObj.array };
    this.props.doGetProducts(0, limit, filters);
  };

  render() {
    return (
      <Fragment>
        <FilterList
          open
          title="Brands"
          list={this.props.brand}
          checked={this.props.filters.brand}
          onFiltersChange={filters => this.handleToggleCheckbox(filters, 'brand')}
        />
        <FilterList
          title="Frets"
          list={constants.frets}
          checked={this.props.filters.frets}
          onFiltersChange={filters => this.handleToggleCheckbox(filters, 'frets')}
        />
        <FilterList
          title="Woods"
          list={this.props.wood}
          checked={this.props.filters.wood}
          onFiltersChange={filters => this.handleToggleCheckbox(filters, 'wood')}
        />
        <FilterListRadio
          title="Price"
          list={constants.prices}
          onFiltersChange={filters => this.handleToggleRadio(filters, 'price')}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  brand: selectors.getBrand(state),
  wood: selectors.getWood(state),
  skip: productSelectors.getSkip(state),
  limit: productSelectors.getLimit(state),
  filters: selectors.getFilters(state)
});
const withConnect = connect(
  mapStateToProps,
  { doGetBrands, doGetWoods, doGetProducts, doToggleCheckbox, doToggleRadio }
);

export default withConnect(Filters);
