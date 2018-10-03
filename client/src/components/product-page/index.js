import React, { Component } from 'react';

class ProductPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
  }
  render() {
    return (
      <div>
        <h3>ProductPage</h3>
      </div>
    );
  }
}

export default ProductPage;
