import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DashboardLayout from '../../dashboard-layout';
import Category from './category/index';
import { getBrand, getWood } from '../../../guitars/filters/reducer';
import { doGetBrands, doGetWoods, doAddBrand, doAddWood } from '../../../guitars/filters/actions';

class ManageCategories extends Component {
  componentDidMount() {
    !this.props.woods.length && this.props.doGetWoods();
    !this.props.brands.length && this.props.doGetBrands();
  }

  render() {
    const { brands, woods } = this.props;
    return (
      <DashboardLayout>
        <Category title="Brands" list={brands} name="brand" onAddCategory={this.props.doAddBrand} />
        <Category title="Woods" list={woods} name="wood" onAddCategory={this.props.doAddWood} />
      </DashboardLayout>
    );
  }
}

ManageCategories.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.shape).isRequired,
  woods: PropTypes.arrayOf(PropTypes.shape).isRequired,
  doGetBrands: PropTypes.func.isRequired,
  doGetWoods: PropTypes.func.isRequired,
  doAddBrand: PropTypes.func.isRequired,
  doAddWood: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  brands: getBrand(state),
  woods: getWood(state)
});
export default connect(
  mapStateToProps,
  { doGetBrands, doGetWoods, doAddBrand, doAddWood }
)(ManageCategories);
