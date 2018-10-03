import React from 'react';
import PropTypes from 'prop-types';

const ShopHeader = props => (
  <div className="page_top">
    <div className="container">{props.title}</div>
  </div>
);

ShopHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default ShopHeader;
