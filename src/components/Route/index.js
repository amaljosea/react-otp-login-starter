import React from 'react';
import { Container } from '../../components'
const ProtectedRoute = ({ page }) => {
    return <Container>{page}</Container>
}
export default ProtectedRoute