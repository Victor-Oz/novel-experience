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
        <p className='account-greeting'>Welcome, {user?.displayName}</p>
        <img className='account-profile-photo' src= {user?.photoURL} alt=""/ >

      </div>
      <button onClick={handleSignOut} className='sign-in-button'>
        Logout
      </button>
    </div>
  );
};

export default Account;
