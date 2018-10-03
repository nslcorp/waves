import React from 'react';
import PropTypes from 'prop-types';

const LoadMore = ({ size, limit, loadMore }) => {
  if (size < limit) return null;

  return (
    <div className="load_more_container">
      <span onClick={loadMore}>Load More</span>
    </div>
  );
};

LoadMore.propTypes = {
  size: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  loadMore: PropTypes.func.isRequired
};

export default LoadMore;
