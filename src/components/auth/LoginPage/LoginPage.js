import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../../api/auth';
import { AuthContextConsumer } from '../context';
import pT from 'prop-types';


import './LoginPage.css';
import Spinner from '../../shared/Spinner';
import Advert from '../../shared/Advert';

import useError from '../../../hooks/useError';

//TODO: REHACER ERROR Y SPINNER PARA USAR CUSTOM HOOK, O SINO EN CADA COMPONENTE POR SEPARADO NO ES OBLIGATORIO

function LoginPage({ onLogin, history, location }) {
  const [isLoading, setIsLoading] = React.useState(false); 
  const [error, handleError] = useError(null);

  
  
  const handleLoading = (value) => setIsLoading(value);
  
  const isLogged = React.useRef(false);
  
  React.useEffect(()=>{
    if(isLogged.current) {
      onLogin();
      const { from } = location.state || { from: { pathname: '/' } };
      history.replace(from);
    }
  });


  const handleSubmit = async (credentials, savePassword)=> {
    
    try
    {
      handleLoading(true);
      await login(credentials, savePassword);       
      isLogged.current = true;             
    }catch (error) { 
      debugger;
        handleError(error.message);      
    } finally
    {
        handleLoading(false);
    }   
  }
    
  return (       
        <div className="loginPage">
           {isLoading && <Spinner />}            
          <h1 className="loginPage-title">Nodepop Log in</h1> 
          { error && <Advert  message={error} /> }             
          <LoginForm onSubmit={handleSubmit} isLoading={isLoading}/>        
        </div>
      );
}

LoginPage.protTypes = {
  onLogin: pT.func.isRequired,
  history: pT.shape({ replace: pT.func.isRequired }).isRequired,
  location: pT.object.isRequired
}

const ConnectedLoginPage = props => (
  <AuthContextConsumer>
    {value => <LoginPage {...value} {...props} />}
  </AuthContextConsumer>
);
    
export default ConnectedLoginPage;
    