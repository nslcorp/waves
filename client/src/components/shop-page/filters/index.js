import React, { Component, Fragment } from 'react';

import FilterList from '../../shared/filter-list';
import { connect } from 'react-redux';
import { doGetBrands, doGetWoods } from '../actions';
import * as selectors from '../reducer';
import * as constants from './constants';

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

  handleFiltersChange = (filters, type) => {
    this.setState({ [type]: filters });
    console.log(filters, type);
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
        <FilterList
          title="Price"
          list={constants.price}
          checked={this.state.price}
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
