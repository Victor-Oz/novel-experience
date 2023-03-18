import React from 'react';
import { UserAuth } from '../context/AuthContext';

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
      <h1 className='Account h1'>Account</h1>
      <div>
        <p className='h2'>Welcome, {user?.displayName}</p>
     
      <img className='profile-photo' src= {user?.photoURL} alt="" ></img>
      </div>
      <button onClick={handleSignOut} className='button'>
        Logout
      </button>
    </div>
  );
};

export default Account;
