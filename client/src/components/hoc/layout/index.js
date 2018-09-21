import React, { Component, Fragment } from 'react';

import Header from '../../header';
import Footer from '../../footer';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="page_container">{this.props.children}</div>
        <Footer />
      </Fragment>
    );
  }
}

Layout.propTypes = {};

export default Layout;
