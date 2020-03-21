import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'

const RedirectMessage = ({ to, delay, message }) => {
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setRedirect(true)
        }, delay)
    }, [])

    return redirect ? <Redirect to={to} /> : <p>{message}</p>
}
export default RedirectMessage