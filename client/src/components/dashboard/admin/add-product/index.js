import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWood, getBrand } from '../../../guitars/filters/reducer';
import { doGetWoods, doGetBrands } from '../../../guitars/filters/actions';

import DashboardLayout from '../../dashboard-layout';
import AddProductForm from './form/index';
import { doAddProduct } from '../../../guitar-detail/actions';

class AddProduct extends Component {
  componentDidMount() {
    const { wood, brand } = this.props;
    !brand.length && this.props.doGetBrands();
    !wood.length && this.props.doGetWoods();
  }

  render() {
    const { wood, brand } = this.props;
    return (
      <DashboardLayout>
        <div>
          <h3>AddProduct</h3>
          <AddProductForm onSubmit={this.props.doAddProduct} wood={wood} brand={brand} />
        </div>
      </DashboardLayout>
    );
  }
}

AddProduct.propTypes = {};

const mapStateToProps = state => ({
  wood: getWood(state).map(({ _id, name }) => ({ key: _id, value: name })),
  brand: getBrand(state).map(({ _id, name }) => ({ key: _id, value: name }))
});
export default connect(
  mapStateToProps,
  { doGetBrands, doGetWoods, doAddProduct }
)(AddProduct);
