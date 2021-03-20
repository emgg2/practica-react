import React from 'react';
import LoginForm from './LoginForm';

import './LoginPage.css';

function LoginPage({ onLogin }) {

    return (
        <div className="loginPage">
          <h1 className="loginPage-title">Log in to Twitter</h1>       
          <LoginForm />
        </div>
      );
    }
    
export default LoginPage;
    