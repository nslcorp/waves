import React from 'react';
import PropTypes from 'prop-types';
import CustomLink from './custom-link';
import BagLink from './bag-link';
import AddToCard from './add-to-cart-link';

const Button = ({ type, ...restProps }) => {
  if (type === 'bag_link') return <BagLink {...restProps} />;

  if (type === 'add_to_cart_link') return <AddToCard {...restProps} />;

  return <CustomLink {...restProps} />;
};

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  addStyles: PropTypes.object,
  classNames: PropTypes.string
};

Button.defaultProps = {
  type: 'default'
};

export default Button;
