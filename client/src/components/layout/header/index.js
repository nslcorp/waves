import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/es/Link';
import { connect } from 'react-redux';
import { getUser } from '../../user/reducer';
import { doLogout } from '../../user/actions';

const Header = props => {
  const { isAuth, cart } = props;

  const showLinks = () => {
    return (
      <Fragment>
        <div className="cart_link">
          <span>{cart ? cart.length : 0}</span>
          <Link to="/dashboard/cart">My Cart</Link>
        </div>

        <Link to="/dashboard">My Account</Link>
        <div className="log_out_link" onClick={() => props.doLogout(props.history)}>
          Log Out
        </div>
      </Fragment>
    );
  };

  return (
    <header className="bck_b_light">
      <div className="container">
        <div className="left">
          <div className="logo">Waves</div>
        </div>
        <div className="right">
          <div className="top">{isAuth ? showLinks() : <Link to="/login">Log In</Link>}</div>
          <div className="bottom">
            <Link to="/">Home</Link>
            <Link to="/guitars">Guitars</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape),
  isAuth: PropTypes.bool
};

const mapStateToProps = state => {
  const { cart, isAuth } = getUser(state);
  return {
    cart,
    isAuth
  };
};
export default connect(
  mapStateToProps,
  { doLogout }
)(Header);
