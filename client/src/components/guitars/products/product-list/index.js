import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../../shared/cards/card';

const CardBlock = props => {
  if (props.loading) return <h2>Loading...</h2>;

  if (!props.list.length) return <div className="no_result">Sorry, no results</div>;

  return (
    <div className="card_block_shop">
      {props.list.map(card => (
        <Card key={card._id} {...card} grid={props.grid} />
      ))}
    </div>
  );
};

CardBlock.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape).isRequired,
  loading: PropTypes.bool.isRequired
};

export default CardBlock;
