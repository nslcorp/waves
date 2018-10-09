import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getLoading, getProduct } from './reducer';
import { doGetProduct } from './actions';
import GuitarHeader from './header';
import GuitarInfo from './info';
import ImageSection from './image-section';
import { doAddToCart } from '../user/actions';

class GuitarDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    !this.props.loading && this.props.doGetProduct(id);
  }

  render() {
    if (!this.props.product._id) return null;

    if (this.props.loading) return <h2>Loading...</h2>;

    return (
      <Fragment>
        <GuitarHeader />

        <div className="container">
          <div className="product_detail_wrapper">
            <div className="left">
              <div style={{ width: '500px' }}>
                <ImageSection detail={this.props.product} />
              </div>
            </div>
            <div className="right">
              <GuitarInfo onAddToCart={this.props.doAddToCart} {...this.props.product} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: getLoading(state),
  product: getProduct(state)
});
export default connect(
  mapStateToProps,
  { doGetProduct, doAddToCart }
)(GuitarDetail);
