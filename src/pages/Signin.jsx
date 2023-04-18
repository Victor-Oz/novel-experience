import React, { useEffect } from 'react';
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  return (
    <div className='signin-page'>
      
  
      <div className='container'>
      <img src="/welcome.jpg" alt="Google logo" class="logo-image"/>
        <button className='sign-in-button' onClick={handleGoogleSignIn}>Login With Google</button>
      </div>
    </div>
  );
};

export default Signin;
