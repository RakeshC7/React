import React from "react";


// AuthContext is not component it's Object.
const AuthContext = React.createContext({
    isLoggedIn : false,
    onLogout: () => {}
});

export default AuthContext;