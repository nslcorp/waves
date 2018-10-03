import React from 'react';
import PropTypes from 'prop-types';

import AddCategory from './form/index';

const Category = props => (
  <div className="admin_category_wrapper">
    <h1>{props.title}</h1>
    <div className="admin_two_column">
      <div className="left">
        <div className="brands_container">
          {props.list.map(item => (
            <div className="category_item" key={item._id}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <AddCategory onSubmit={props.onAddCategory} name={props.name} />
      </div>
    </div>
  </div>
);

Category.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape).isRequired,
  name: PropTypes.string.isRequired,
  onAddCategory: PropTypes.func.isRequired
};

export default Category;
