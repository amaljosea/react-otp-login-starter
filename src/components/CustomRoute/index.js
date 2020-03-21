import React from 'react'
import { Container, RedirectMessage } from '..'
import { Route } from 'react-router-dom'

const CustomRoute = ({ component: Component, allowedStatus, path }) => {
    if (allowedStatus) {
        return <RedirectMessage to="/" delay={2000} message="Seems like you are on the wrong page! redirecting to home page" />
    } else {
        return <Route exact path={path} component={() => <Container><Component /></Container>} />
    }
}
export default CustomRoute