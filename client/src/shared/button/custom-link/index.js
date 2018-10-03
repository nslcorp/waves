import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CustomLink = props => {
  const rootClassList = !props.altClass ? 'link_default' : props.altClass;
  return (
    <Link className={rootClassList} to={props.linkTo} {...props.addStyles}>
      {props.title}
    </Link>
  );
};

CustomLink.propTypes = {
  altClass: PropTypes.string,
  title: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  addStyles: PropTypes.object
};

export default CustomLink;
