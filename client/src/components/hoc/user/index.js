import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { name: 'My account', to: '/user/dashboard' },
  { name: 'User information', to: '/user/user-profile' },
  { name: 'My Cart', to: '/user/cart' }
];

const UserLayout = props => (
  <div className="container">
    <div className="user_container">
      <div className="user_left_nav">
        <h2>My account</h2>
        <div className="links">
          {links.map(link => (
            <Link key={link.to} to={link.to}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="user_right">{props.children}</div>
    </div>
  </div>
);

UserLayout.propTypes = {};

export default UserLayout;
