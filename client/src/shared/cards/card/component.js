import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../button/index';

const Card = props => {
  const cardImage = props.images.length ? props.images[0].url : '/images/image_not_availble.png';

  return (
    <div className={`card_item_wrapper ${props.grid}`}>
      <div className="image" style={{ background: `url(${cardImage}) no-repeat` }}>
        {' '}
      </div>
      <div className="action_container">
        <div className="tags">
          <div className="brand">{props.brand.name}</div>
          <div className="name">{props.name}</div>
          <div className="name">${props.price}</div>
        </div>

        {props.grid === 'bars' ? (
          <div className="description">
            <p>{props.description}</p>
          </div>
        ) : null}

        <div className="actions">
          <div className="button_wrapp">
            <Button
              altClass="card_link"
              title="View product"
              linkTo={`/guitars/${props._id}`}
              addStyles={{ margin: '10px 0 0 0' }}
            />
          </div>
          <div className="button_wrapp">
            <Button
              type="bag_link"
              onClick={() => {
                props.isAuth ? props.doAddToCart(props._id) : console.log('you need to log in');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  user: PropTypes.object,
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
  description: PropTypes.string.isRequired,
  brand: PropTypes.object.isRequired,

  doAddToCart: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired
};

export default Card;
