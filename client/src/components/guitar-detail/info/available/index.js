import React from 'react';
import PropTypes from 'prop-types';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

const Available = ({ available }) => (
  <div className="tag">
    <div>
      <FontAwesomeIcon icon={available ? faCheck : faTimes} />
    </div>
    <div className="tag_text">
      <div>{available ? 'Available' : 'Not Available'}</div>
      <div>{available ? 'in store' : 'Pre-order only'}</div>
    </div>
  </div>
);

Available.propTypes = {
  available: PropTypes.bool.isRequired
};

export default Available;
