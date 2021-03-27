import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../../api/auth';


import './LoginPage.css';
import Spinner from '../../shared/Spinner';

function LoginPage({ isLoading, error, onError, onLogin, onLoading }) {
  
  
  const handleSubmit = async credentials => {
    try
    {
      onLoading(true);
      await login(credentials);
      onLogin(); 
           
    }catch (error) {
      onError(error);
    } finally
    {
      onLoading(false);
    }   
  }
    
  return (
        <div className="loginPage">
          <h1 className="loginPage-title">Log in to Twitter</h1> 
          { error && <div className="loginPage-error">{error.message}</div> }
          {isLoading && <Spinner />}       
          <LoginForm onSubmit={handleSubmit} isLoading={isLoading}/>
          
        </div>
      );
}
    
export default LoginPage;
    