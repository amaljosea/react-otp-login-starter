import React from 'react';
import './App.css';
import { Home, EnterEmail, EnterOtp, Profile, Register } from './pages'
import { Route } from './components'
import { authStatus } from './constants'

function App() {
  return (
    <div className="App">
      <Route page={<Home />} route='/' />
      <Route page={<EnterEmail />} route='/enter-email' allowedStatus={[authStatus.GUEST]} />
      <Route page={<EnterOtp />} route='/enter-otp' allowedStatus={[authStatus.OTP_SENT]} />
      <Route page={<Profile />} route='/profile' allowedStatus={[authStatus.LOGGED_IN]} />
      <Route page={<Register />} route='/register' allowedStatus={[authStatus.LOGGED_IN]} />
    </div>
  );
}

export default App;
