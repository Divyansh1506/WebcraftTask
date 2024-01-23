import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from './firebase-config';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const Login = () => {
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
          navigate('/splash');
        }).catch((error) => {
          console.error("Authentication Error: ", error);
        });
    }
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      console.error("Logout Error: ", error);
    });
  };

  return (
    <div className="container">
      <h1>Welcome to Login Page </h1>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login with Gmail</button>
      )}
    </div>
  );
};

export default Login;
