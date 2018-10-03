import React from 'react';
import { connect } from 'react-redux';

import { getUser } from '../../user/reducer';
import SidebarLinks from './sidebar-links';

const links = [
  { name: 'My account', to: '/dashboard/user/account' },
  { name: 'User information', to: '/dashboard/user/profile' },
  { name: 'My Cart', to: '/dashboard/user/cart' }
];

const admin = [
  { name: 'Site info', to: '/dashboard/admin/site-info' },
  { name: 'Add products', to: '/dashboard/admin/add-product' },
  { name: 'Manage categories', to: '/dashboard/admin/manage-categories' },
  { name: 'Upload file', to: '/dashboard/admin/add-file' }
];

const DashboardLayout = props => {
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

export default connect(mapStateToProps)(DashboardLayout);
