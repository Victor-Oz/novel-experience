import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='account-container'>

      <div>
        <p className='h2'>Welcome, {user?.displayName}</p>
     

      </div>
      <button onClick={handleSignOut} className='signin-button'>
        Logout
      </button>
    </div>
  );
};

export default Account;
