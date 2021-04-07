import React from 'react';
import pT from 'prop-types';

import Button from '../../shared/Button';
import Input from '../../shared/Input';
import Checkbox from '../../shared/Checkbox';
import useForm from '../../../hooks/useForm';

import './LoginForm.css';

function LoginForm({ onSubmit, isLoading }) {

    const [credentials, handleChange, handleCheck] = useForm ({
        email: '',
        password: '',
        savePassword: false,
        });
    
    const handleSubmit = event => {
          event.preventDefault();    
          onSubmit(credentials);
    };


const {email, password, savePassword} = credentials;   

return (
    <form className="loginForm" onSubmit={handleSubmit} >
      <Input
        type="text"
        name="email"
        label="Email"
        className="loginForm-field"            
        value={email}
        autoFocus
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        label="Password"
        className="loginForm-field" 
        value={password}           
        onChange={handleChange}
      />
      <Checkbox 
        value="Guardar password"
        name="Guardar Password"
        onChange={handleCheck}
        checked={savePassword ? true: false }
        label="Guardar Password" />
          
        
      
      <Button
        type="submit"
        className="loginForm-submit"
        variant="primary"           
        disabled={!credentials.email || !credentials.password}
      >
        Log in
      </Button>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit : pT.func.isRequired,

}



export default LoginForm;