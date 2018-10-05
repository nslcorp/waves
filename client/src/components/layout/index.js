import React, { Fragment } from 'react';

import Header from './header';
import Footer from './footer';

const Layout = props => (
  <Fragment>
    <Header />
    <div className="page_container">{props.children}</div>
    <Footer />
  </Fragment>
);

export default Layout;
