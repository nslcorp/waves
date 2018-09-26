import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { doGetBrands, doGetWoods } from '../actions';
import * as selectors from '../reducer';
import * as constants from './constants';
import FilterList from '../../shared/filter-list';
import FilterListRadio from '../../shared/filter-list-radio';

class Filters extends Component {
  state = {
    brands: [],
    frets: [],
    woods: [],
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

    this.setState({ [category]: data });
  };

  render() {
    return (
      <Fragment>
        <FilterList
          open
          title="Brands"
          list={this.props.brands}
          checked={this.state.brands}
          onFiltersChange={filters => this.handleFiltersChange(filters, 'brands')}
        />
        <FilterList
          title="Frets"
          list={constants.frets}
          checked={this.state.frets}
          onFiltersChange={filters => this.handleFiltersChange(filters, 'frets')}
        />
        <FilterList
          title="Woods"
          list={this.props.woods}
          checked={this.state.woods}
          onFiltersChange={filters => this.handleFiltersChange(filters, 'woods')}
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
  brands: selectors.getBrands(state),
  woods: selectors.getWoods(state)
});
const withConnect = connect(
  mapStateToProps,
  { doGetBrands, doGetWoods }
);

export default withConnect(Filters);
