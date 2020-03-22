import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { Container } from '../../components'

const RedirectMessage = ({ to, delay, message }) => {
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setRedirect(true)
        }, delay)
    }, [])

    return <Container>{redirect ? <Redirect to={to} /> : <p>{message}</p>}</Container>
}
export default RedirectMessage