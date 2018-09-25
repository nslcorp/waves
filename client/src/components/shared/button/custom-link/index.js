import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CustomLink = props => (
  <Link className="link_default" to={props.linkTo} {...props.addStyles}>
    {props.title}
  </Link>
);

CustomLink.propTypes = {
  title: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  addStyles: PropTypes.object
};

export default CustomLink;
