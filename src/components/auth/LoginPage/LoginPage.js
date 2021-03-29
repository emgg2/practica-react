import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../../api/auth';


import './LoginPage.css';
import Spinner from '../../shared/Spinner';
import Advert from '../../shared/Advert';

//TODO: REHACER ERROR Y SPINNER PARA USAR CUSTOM HOOK, O SINO EN CADA COMPONENTE POR SEPARADO NO ES OBLIGATORIO

function LoginPage({ onLogin,  history, location }) {
  const [isLoading, setIsLoading] = React.useState(false); 
  const [error, setError] = React.useState(null);

  const handleError = (error) => setError(error);
  const handleLoading = (value) => setIsLoading(value);
  
  const isLogged = React.useRef(false);
  
  React.useEffect(()=>{
    if(isLogged.current) {
      onLogin();
      const { from } = location.state || { from: { pathname: '/' } };
      history.replace(from);
    }
  });


  const handleSubmit = async credentials => {
    try
    {
      handleLoading(true);
      await login(credentials);   
    
      isLogged.current = true;      
           
    }catch (error) {
      handleError(error);
      
    } finally
    {
      handleLoading(false);
    }   
  }
    
  return (   
    
        <div className="loginPage">
           {isLoading && <Spinner />}  
          
          <h1 className="loginPage-title">Log in to Twitter</h1> 
          { error && <Advert  /> }
             
          <LoginForm onSubmit={handleSubmit} isLoading={isLoading}/>
         
          
        </div>
      );
}
    
export default LoginPage;
    