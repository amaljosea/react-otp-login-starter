import React from 'react';
import './App.css';
import { Home, EnterEmail, EnterOtp, Profile, Register } from './pages'
import { CustomRoute } from './components'
import { authStatus } from './constants'
import { BrowserRouter, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <CustomRoute component={EnterEmail} path='/enter-email' allowedStatus={authStatus.GUEST} />
          <CustomRoute component={EnterOtp} path='/enter-otp' allowedStatus={authStatus.OTP_SENT} />
          <CustomRoute component={Profile} path='/profile' allowedStatus={authStatus.LOGGED_IN} />
          <CustomRoute component={Register} path='/register' allowedStatus={authStatus.LOGGED_IN} />
          <CustomRoute component={Home} path='/' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
