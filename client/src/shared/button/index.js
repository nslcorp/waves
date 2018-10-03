import React from 'react';
import PropTypes from 'prop-types';
import CustomLink from './custom-link/index';
import BagLink from './bag-link/index';
import AddToCard from './add-to-cart-link/index';

const Button = ({ type, ...restProps }) => {
  if (type === 'bag_link') return <BagLink {...restProps} />;

  if (type === 'add_to_cart_link') return <AddToCard {...restProps} />;

  return <CustomLink {...restProps} />;
};

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  linkTo: PropTypes.string,
  addStyles: PropTypes.object,
  classNames: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'default'
};

export default Button;
