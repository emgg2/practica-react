import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../../api/auth';


import './LoginPage.css';
import Spinner from '../../shared/Spinner';

function LoginPage({ isLoading, error, onError, onLogin, onLoading, history }) {
  const isLogged = React.useRef(false);
  
  React.useEffect(()=>{
    if(isLogged.current) {
      onLogin();
      history.push('/');
    }
  },[isLogged, onLogin]);


  const handleSubmit = async credentials => {
    try
    {
      onLoading(true);
      await login(credentials);
      isLogged.current = true;      
           
    }catch (error) {
      onError(error);
    } finally
    {
      onLoading(false);
    }   
  }
    
  return (
    
    
        <div className="loginPage">
           {isLoading && <Spinner />}  
          
          <h1 className="loginPage-title">Log in to Twitter</h1> 
          { error && <div className="loginPage-error">{error.message}</div> }
             
          <LoginForm onSubmit={handleSubmit} isLoading={isLoading}/>
         
          
        </div>
      );
}
    
export default LoginPage;
    