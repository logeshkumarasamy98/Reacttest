// UserManagement.js

import React, { useState } from 'react';
// import './UserManagement.css'; // Import the CSS file
import AccountCreationFields from './AccountCreationFields';

function UserManagement() {
  const [showUserManagementFields, setShowUserManagementFields] = useState(false);

  const toggleUserManagement = () => {
    setShowUserManagementFields(!showUserManagementFields);
  };

  return (
    <div>
      <button onClick={toggleUserManagement}>User Management</button>
      {showUserManagementFields && <AccountCreationFields />}
    </div>
  );
}

export default UserManagement;
