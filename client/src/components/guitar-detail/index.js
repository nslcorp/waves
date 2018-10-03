import React, { Component } from 'react';

class GuitarDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
  }
  render() {
    return (
      <div>
        <h3>GuitarDetail</h3>
      </div>
    );
  }
}

export default GuitarDetail;
