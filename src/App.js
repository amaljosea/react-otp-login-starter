import React, { useState, useEffect } from 'react';
import './App.css';
import { Home, EnterEmail, EnterOtp, Profile, Register } from './pages'
import { CustomRoute } from './components'
import { authStatus } from './constants'
import { BrowserRouter, Switch } from 'react-router-dom'
import api from './api'
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
    const token = localStorage.getItem('token')
    const checkToken = async () => {
      const response = await api.auth.checkToken({ token });
      if (response.success) {
        setStore({ ...store, authStatus: response.data.authStatus })
      }
    }
    checkToken()
  }, [])

  console.log("store==>", store)
  return (
    <StoreContext.Provider value={{ store, setStore }}>
      <BrowserRouter>
        <Switch>
          <CustomRoute component={EnterEmail} path='/enter-email' />
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
