import React, { Component, Fragment } from 'react';

import ShopHeader from './header';
import Filters from './filters';

class ShopPage extends Component {
  render() {
    return (
      <Fragment>
        <ShopHeader title="Browse products" />
        <div className="container">
          <div className="shop_wrapper">
            <div className="left">
              <Filters />
            </div>
            <div className="right">22</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ShopPage;
