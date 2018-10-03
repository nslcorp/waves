import React from 'react';
import PropTypes from 'prop-types';
import Card from './card/index';

const Cards = props => {
  if (!props.list.length) return null;

  return (
    <div className="card_block">
      <div className="container">
        <div className="title">{props.title}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {props.list.map(card => (
            <Card key={card.name} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape).isRequired
};

export default Cards;
