import React from 'react';

const UserInfo = ({ name, age }) => {
  return (
    <div className="user-info">
      <h2>User Info</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
};

export default UserInfo;
