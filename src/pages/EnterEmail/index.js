import React from 'react';

const EnterEmail = (props) => {
    const { store, setStore } = props
    const handleSubmit = () => {
        setStore({ ...store, email: "amal@dexlock.com" })
    }
    return <>
        <input placeholder="john@gmail.com" />
        <input placeholder="******" type="password" />
        <button onClick={handleSubmit}>LOGIN</button>
    </>
}
export default EnterEmail