import React, { useContext } from 'react'
import { Container, RedirectMessage } from '..'
import { Route } from 'react-router-dom'
import { StoreContext } from '../../App'
import { withRouter } from 'react-router-dom';

const CustomRoute = ({ component, allowedStatus, path }) => {
    const { store, setStore } = useContext(StoreContext);
    const Component = withRouter(component)
    if (allowedStatus && allowedStatus !== store.authStatus) {
        return <RedirectMessage to="/" delay={2000} message="Seems like you are on the wrong page! redirecting to home page" />
    } else {
        return <Route exact path={path} component={() => <Container>{<Component {...{ store, setStore }} />}</Container>} />
    }
}
export default CustomRoute