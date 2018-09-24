import React from 'react';
import PropTypes from 'prop-types';
import CustomLink from './link';

const Button = ({ type, ...restProps }) => {
  if (type === 'default') return <CustomLink {...restProps} />;

  return (
    <div>
      <h3>Button</h3>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  addStyles: PropTypes.object
};

Button.defaultProps = {
  type: 'default'
};

export default Button;
