import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../shared/button';

const Slide = ({ title, lowTitle, linkTitle, img, to }) => (
  <div>
    <div
      className="featured_image"
      style={{
        background: `url(${img})`,
        height: `${window.innerHeight}px`
      }}
    >
      <div className="featured_action">
        <div className="tag title">{title}</div>
        <div className="tag low_title">{lowTitle}</div>
        <div>
          <Button
            type="default"
            title={linkTitle}
            linkTo={to}
            addStyles={{
              margin: '10px 0 0 0'
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  lowTitle: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default Slide;
