import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="bck_b_light">
        <div className="container">
          <div className="left">
            <div className="logo">Waves</div>
          </div>
          <div className="right">
            <div className="top">Link1</div>
            <div className="bottom">Link2</div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {};

export default Header;
