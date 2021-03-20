import React from 'react';

import Button from '../../shared/Button';
import FormField from '../../shared/FormField';

import './LoginForm.css';

function LoginForm() {
    const [credentials, setCredentials] = React.useState ({
        username: '',
        password: '',
        });
    
    const handleUsernameChange = event => {
        console.log(event.target);
    }

    return (
        <form className="loginForm" >
          <FormField
            type="text"
            name="username"
            label="phone, email or username"
            className="loginForm-field"            
            value={credentials.username}
            onChange={handleUsernameChange}
          />
          <FormField
            type="password"
            name="password"
            label="password"
            className="loginForm-field" 
            value={credentials.password}           
          />
          <Button
            type="submit"
            className="loginForm-submit"
            variant="primary"
          >
            Log in
          </Button>
        </form>
      );
}

export default LoginForm;