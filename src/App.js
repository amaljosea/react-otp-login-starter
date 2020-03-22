import React, { useState, useEffect } from 'react';
import './App.css';
import { Home, EnterEmail, EnterOtp, Profile, Register } from './pages'
import { CustomRoute } from './components'
import { authStatus } from './constants'
import { BrowserRouter, Switch } from 'react-router-dom'

export const StoreContext = React.createContext();

function App() {

  const [store, setStore] = useState({
    authStatus: authStatus.GUEST,
    userData: {
      name: '',
      emailId: ''
    }
  });
  useEffect(() => {
    console.log("Load the app status here")
  }, [])
  console.log("store==>", store)
  return (
    <StoreContext.Provider value={{ store, setStore }}>
      <BrowserRouter>
        <Switch>
          <CustomRoute component={EnterEmail} path='/enter-email' allowedStatus={authStatus.GUEST} />
          <CustomRoute component={EnterOtp} path='/enter-otp' allowedStatus={authStatus.OTP_SENT} />
          <CustomRoute component={Profile} path='/profile' allowedStatus={authStatus.LOGGED_IN} />
          <CustomRoute component={Register} path='/register' allowedStatus={authStatus.LOGGED_IN} />
          <CustomRoute component={Home} path='/' />
        </Switch>
      </BrowserRouter>
    </StoreContext.Provider>
  );
}

export default App;
