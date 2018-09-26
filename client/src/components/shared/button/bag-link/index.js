import React from 'react';
import PropTypes from 'prop-types';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faShoppingBag from '@fortawesome/fontawesome-free-solid/faShoppingBag';

const BagLink = props => (
  <div className="bag_link" onClick={props.onClick}>
    <FontAwesomeIcon icon={faShoppingBag} />
  </div>
);

BagLink.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default BagLink;
