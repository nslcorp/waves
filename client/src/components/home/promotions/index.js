import React from 'react';
import Button from '../../../shared/button';

const PROMOTION = {
  img: '/images/featured/featured_home_3.jpg',
  lineOne: 'Up to 40% off',
  lineTwo: 'In second hand guitars',
  linkTitle: 'Shop now',
  linkTo: '/guitars'
};

const Promotions = () => (
  <div className="home_promotion">
    <div className="home_promotion_img" style={{ background: `url(${PROMOTION.img})` }}>
      <div className="tag title">{PROMOTION.lineOne}</div>
      <div className="tag low_title">{PROMOTION.lineTwo}</div>
      <div>
        <Button
          title={PROMOTION.linkTitle}
          linkTo={PROMOTION.linkTo}
          addStyles={{ margin: '10px 0 0 0' }}
        />
      </div>
    </div>
  </div>
);

export default Promotions;
