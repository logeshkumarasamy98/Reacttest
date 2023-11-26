// AccountCreationFields.js

import React from 'react';
// import './AccountCreationFields.css'; // Import the CSS file

function AccountCreationFields() {
  return (
    <div>
      <button onClick={() => console.log('Account Creation')}>Account Creation</button>
      <button onClick={() => console.log('Account Deletion')}>Account Deletion</button>
      <button onClick={() => console.log('Suspend / Revival')}>Suspend / Revival</button>
      <button onClick={() => console.log('Rehire')}>Rehire</button>
      {/* Add the input fields here */}
    </div>
  );
}

export default AccountCreationFields;
