import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../shared/button';

import Shipping from './shipping';
import Available from './available';

const GuitarInfo = props => {
  const { _id: id, name, description, frets, wood, price, brand } = props;

  return (
    <div>
      <h1>{`${brand.name} ${name}`}</h1>
      <p>{description}</p>

      <div className="product_tags">
        {props.shipping && <Shipping />}
        <Available available={props.available} />
      </div>

      <div className="product_actions">
        <div className="price">$ {price}</div>
        <div className="cart">
          <Button type="add-to-cart" onClick={() => props.onAddToCart(id)} />
        </div>
      </div>

      <div className="product_specifications">
        <h2>Specs:</h2>
        <div>
          <div className="item">
            <strong>Frets:</strong> {frets}
          </div>
          <div className="item">
            <strong>Wood:</strong> {wood && wood.name} {/*wood === null :((*/}
          </div>
        </div>
      </div>
    </div>
  );
};

GuitarInfo.propTypes = {
  onAddToCart: PropTypes.func.isRequired,

  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  shipping: PropTypes.bool.isRequired,
  available: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  frets: PropTypes.number.isRequired,
  brand: PropTypes.shape().isRequired,
  wood: PropTypes.shape()
};

export default GuitarInfo;
