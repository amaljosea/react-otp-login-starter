import React from 'react';

const Container = ({ children }) => {
    return <div style={{ backgroundColor: "green", minHeight: "40vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>{children}</div>
}
export default Container