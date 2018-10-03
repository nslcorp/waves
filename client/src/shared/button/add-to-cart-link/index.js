import React from 'react';
import PropTypes from 'prop-types';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faShoppingBag from '@fortawesome/fontawesome-free-solid/faShoppingBag';

const AddToCard = props => (
  <div className="add_to_cart_link" onClick={props.onClick}>
    <FontAwesomeIcon icon={faShoppingBag} />
    Add to cart
  </div>
);

AddToCard.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddToCard;
