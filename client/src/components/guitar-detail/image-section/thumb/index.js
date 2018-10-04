import React from 'react';
import PropTypes from 'prop-types';

const Thumb = ({ image, onClick }) => (
  <div className="thumb" onClick={onClick} style={{ background: `url(${image}) no-repeat` }} />
);

Thumb.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Thumb;
