import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from './Component/Splash';
import Onboarding from './Component/Onboarding';
import SignIn from './Component/SignIn';
import Verification from './Component/Verification';
import Profile from './Component/Account-Detail';
// import Login from './Component/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Splash />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
