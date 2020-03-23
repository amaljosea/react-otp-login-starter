import React, { useState } from 'react';
import api from '../../api'
import { authStatus } from '../../constants'

const EnterOtp = (props) => {
    const { store, setStore } = props
    const [otp, setOtp] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await api.auth.otpVerify({ store });
        if (response.success) {
            if (response.data.isRegisterd) {
                setStore({ ...store, authStatus: authStatus.LOGGED_IN })
                props.history.push('/profile')
            } else {
                setStore({ ...store, authStatus: authStatus.NOT_REGISETRED })
                props.history.push('/register')
            }
        }
    }
    return <><p>Enter otp</p><form onSubmit={handleSubmit}>
        <input placeholder="****" onChange={(e) => setOtp(e.target.value)} value={otp} required />
        <button type="submit">submit</button>
    </form></>
}
export default EnterOtp