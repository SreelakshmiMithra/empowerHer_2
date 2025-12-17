import React from 'react';
import UserInfo from './UserInfo'; // Import child component

const UserProfile = () => {
  const user = {
    name: 'Lakshmi',
    age: 22
  };

  return (
    <div className="user-profile">
        <h1>User Profile</h1>
        <UserInfo name={user.name} age={user.age} />
    </div>
  );
};

export default UserProfile;
