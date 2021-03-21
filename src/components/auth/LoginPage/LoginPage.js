import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../../api/auth';

import './LoginPage.css';

function LoginPage({ onLogin }) {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubmit = async credentials => {
    try
    {
      setIsLoading(true);
      await login(credentials);
      onLogin();      
    }catch (error) {
      setError(error)
    } finally
    {
      setIsLoading(false);
    }   
  }
    
  return (
        <div className="loginPage">
          <h1 className="loginPage-title">Log in to Twitter</h1> 
          { error && <div className="loginPage-error">{error.message}</div> }
          {/* {isLoading && <Spinner />}       */}
          <LoginForm onSubmit={handleSubmit} isLoading={isLoading}/>
          
        </div>
      );
}
    
export default LoginPage;
    