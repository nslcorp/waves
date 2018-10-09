import React from 'react';
import PropTypes from 'prop-types';
import DashboardLayout from './dashboard-layout';
import Button from '../../shared/button';

const Dashboard = props => {
  const { user } = props;
  console.log(props);
  return (
    <DashboardLayout>
      <div>
        <div className="user_nfo_panel">
          <h1>User information</h1>
          <div>
            <span>{user.name}</span>
            <span>{user.lastName}</span>
            <span>{user.email}</span>
          </div>

          <Button title="Edit account info" linkTo="/user/user-profile" />
          <div className="user_nfo_panel">
            <h1>History purchases</h1>
            <div>Info_will-be-here</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object.isRequired
};

export default Dashboard;
