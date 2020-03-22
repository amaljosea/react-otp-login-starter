import React from 'react';

const Home = (props) => {
    return <>
        <p>Home</p>
        <button onClick={() => props.history.push('/enter-email')}>login/register</button>
    </>
}
export default Home