import React, { useState, useEffect } from 'react';
import api from '../../api'
import { authStatus } from '../../constants'
import { useParams } from 'react-router-dom'

const EnterEmail = (props) => {
    const { store, setStore } = props
    const [email, setEmail] = useState('')
    const { referalCode } = useParams()

    useEffect(() => {
        if (referalCode) {
            console.log("Your referal code is", referalCode)
            //we can store in redux and populate on register page
        }
    }, [referalCode])

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