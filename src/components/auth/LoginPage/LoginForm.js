import React from 'react';

import Button from '../../shared/Button';
import FormField from '../../shared/FormField';

import './LoginForm.css';

function LoginForm() {
    const [credentials, setCredentials] = React.useState ({
        username: '',
        password: '',
        });
    

const handleChange = event => { 
  setCredentials (oldCredentials => ({
    ...oldCredentials,
    [event.target.name]: event.target.value,
  }));
}     
const {username, password} = credentials;   

return (
    <form className="loginForm" >
      <FormField
        type="text"
        name="username"
        label="phone, email or username"
        className="loginForm-field"            
        value={username}
        onChange={handleChange}
      />
      <FormField
        type="password"
        name="password"
        label="password"
        className="loginForm-field" 
        value={password}           
        onChange={handleChange}
      />
      <Button
        type="submit"
        className="loginForm-submit"
        variant="primary"           
        disabled={!credentials.username || !credentials.password}
      >
        Log in
      </Button>
    </form>
  );
}

export default LoginForm;