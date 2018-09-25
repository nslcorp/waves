import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../button';

const Card = props => {
  const cardImage = props.images.length ? props.images[0].url : '/images/image_not_availble.png';

  return (
    <div className={`card_item_wrapper ${props.grid}`}>
      <div
        className="image"
        style={{
          background: `url(${cardImage}) no-repeat`
        }}
      >
        {' '}
      </div>
      <div className="action_container">
        <div className="tags">
          <div className="brand">{props.brand.name}</div>
          <div className="name">{props.name}</div>
          <div className="name">${props.price}</div>
        </div>

        {props.grid ? (
          <div className="description">
            <p>{props.description}</p>
          </div>
        ) : null}

        <div className="actions">
          <div className="button_wrapp">
            <Button
              classNames="card_link"
              title="View product"
              linkTo={`/product_detail/${props._id}`}
              addStyles={{ margin: '10px 0 0 0' }}
            />
          </div>
          <div className="button_wrapp">
            <Button
              type="bag_link"
              runAction={() => {
                props.user.isAuth ? console.log(props._id) : console.log('you need to log in');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape).isRequired
};

export default Card;
