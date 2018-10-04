import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTruck from '@fortawesome/fontawesome-free-solid/faTruck';

const Shipping = () => (
  <div className="tag">
    <div>
      <FontAwesomeIcon icon={faTruck} />
    </div>
    <div className="tag_text">
      <div>Free shipping</div>
      <div>And return</div>
    </div>
  </div>
);

export default Shipping;
