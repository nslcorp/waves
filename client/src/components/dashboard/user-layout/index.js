import React from 'react';
import { connect } from 'react-redux';

import { getUser } from '../../user/reducer';
import SidebarLinks from './sidebar-links';

const links = [
  { name: 'My account', to: '/user/dashboard' },
  { name: 'User information', to: '/user/user-profile' },
  { name: 'My Cart', to: '/user/cart' }
];

const admin = [
  { name: 'Site info', to: '/admin/site-info' },
  { name: 'Add products', to: '/admin/add-product' },
  { name: 'Manage categories', to: '/admin/manage-categories' },
  { name: 'Upload file', to: '/admin/add-file' }
];

const UserLayout = props => {
  const { isAdmin, children } = props;

  return (
    <div className="container">
      <div className="user_container">
        <div className="user_left_nav">
          <SidebarLinks links={links} title="My account" />
          {isAdmin && <SidebarLinks links={admin} title="Admin" />}
        </div>

        <div className="user_right">{children}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAdmin: getUser(state).isAdmin
});

export default connect(mapStateToProps)(UserLayout);
