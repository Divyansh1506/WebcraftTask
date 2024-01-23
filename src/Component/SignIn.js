/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from './firebase-config';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';

import IndoreImage from '../assests/imgs/Group-33622.png'
import google from '../assests/imgs/google.png'
import fb from '../assests/imgs/fb.png'
import apple from '../assests/imgs/apple.png'



const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log('Current User:', currentUser);
      setUser(currentUser);
    });
  }, []);
  

  const handleLogin = () => {
    if (!user) {
      signInWithPopup(auth, provider)
        .then((result) => {
          navigate('/profile');
        }).catch((error) => {
          console.error("Authentication Error: ", error);
        });
    }
  };

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  return (
    <div style={{ height: '100vh', width: '95%', margin: "auto" }} className="signin-container d-flex flex-column align-item-center text-center">
      <div style={{ height: '30%' }} className="images">
        <img style={{ height: '80%' }} className='mt-5' src={IndoreImage} alt="logo" />
      </div>
      <h3 className='mt-3'>Sign In</h3>
      <div className='d-flex mt-3 flex-column' >
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="+91 1122-45-4785"
          value={phoneNumber}
          onChange={handleChange}
          required
          className='rounded-3 border-1 mb-3 p-2'
        />
        <button className='p-2 border-0 rounded-3 bg-danger text-white'>Sign In</button>

        <p className='my-2'>OR</p>

        <button onClick={handleLogin} className='px-5 fw-semibold text-start bg-white p-2 border-secondary border-1 rounded-3 text-black'>
          <img style={{height:"25px"}} className='px-2'  src={google} alt="" />
          Login with Google</button>

        <button className='px-5 fw-semibold text-start bg-white border-secondary my-2 p-2 border-1 rounded-3 text-black'>
          <img style={{height:"25px"}} className='px-2'  src={apple} alt="" />
          Login with Apple</button>

        <button className='px-5 fw-semibold text-start bg-white border-secondary p-2 border-1  rounded-3 text-black'>
          <img style={{height:"25px"}} className='px-2' src={fb} alt="" />
          Login with Facebook</button>
      </div>
      <p className='text-danger fw-semibold mt-3'>Skip Login</p>
      <p className='mb-2'>Read <a href="#"> Terms of Use</a> and <a href="#">Privacy Policy</a></p>
    </div>
  );
};

export default SignIn;
