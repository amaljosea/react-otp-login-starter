import React from 'react';

const Profile = (props) => {
    const referalCode = 1234 // this we can get from an api call
    return <><h1>Profile</h1><p>Your referal code is {referalCode}, your referal url is {window.location.href.replace("profile", `enter-email?referalCode=${referalCode}`)} </p></>
}
export default Profile