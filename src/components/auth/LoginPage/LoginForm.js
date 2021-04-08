import React from 'react';
import pT from 'prop-types';

import Button from '../../shared/Button';
import Input from '../../shared/Input';

import './LoginForm.css';
import Checkbox from '../../shared/Checkbox';

function LoginForm({ onSubmit, isLoading }) {
    const [credentials, setCredentials] = React.useState ({
        email: '',
        password: '',
        });
    const [savePassword, setSavePassword] = React.useState(false);
    
const handleSubmit = event => {

  event.preventDefault();
  onSubmit(credentials,savePassword);

};

const handleChange = event => { 
  setCredentials (oldCredentials => ({
    ...oldCredentials,
    [event.target.name]: event.target.value,
  }));
}     

const handleSavePassword= event => { 
  setSavePassword(savePassword === false ? true: false);
  
  

}
const {email, password} = credentials;   

return (
    <form className="loginForm" onSubmit={handleSubmit} >
      <Input
        type="text"
        name="email"
        label="Email"
        className="loginForm-field"            
        value={email}
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
        onChange={handleSavePassword}
        checked={savePassword ? true: false }
        label="Guardar Password" />
          
        
      
      <Button
        type="submit"
        className="loginForm-submit"
        variant="primary"           
        disabled={isLoading || !credentials.email || !credentials.password}
      >
        Log in
      </Button>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit : pT.func.isRequired,
  isLoading: pT.bool
}

LoginForm.defaultProps = {
  isLoading: false,
}

export default LoginForm;