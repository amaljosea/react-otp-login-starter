import React, { useState } from 'react';
import api from '../../api'
import { authStatus } from '../../constants'

const EnterEmail = (props) => {
    const { store, setStore } = props
    const [email, setEmail] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await api.auth.checkEmail({ email });
        if (response.success) {
            localStorage.setItem('token', response.data.token);
            setStore({ ...store, authStatus: authStatus.OTP_SENT })
            props.history.push('/enter-otp')
        }
    }
    return <form onSubmit={handleSubmit}>
        <input id="email" name="email" placeholder="john@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email} required type="email" />
        <button type="submit">submit</button>
    </form>
}
export default EnterEmail