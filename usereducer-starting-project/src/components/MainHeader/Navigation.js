import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import classes from './Navigation.module.css';

const Navigation = () => {

  // 2nd WAY TO useContext 
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout0}>Logout</button>
          </li>
        )}
      </ul>
    </nav>

    // 1ST WAY TO useContext 

    // <AuthContext.Consumer>
    //   { 
    //     /* where ctx is Context Data here which is coming from auth-context.js file as object */
    //     (ctx) => {
    //       return (
            
    //       )
    //     }
    //   }
    // </AuthContext.Consumer>
  );
};

export default Navigation;
