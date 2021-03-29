import React from 'react';
import pT from 'prop-types';

import Button from '../../shared/Button';
import Input from '../../shared/Input';

import './LoginForm.css';

function LoginForm({ onSubmit, isLoading }) {
    const [credentials, setCredentials] = React.useState ({
        username: '',
        password: '',
        });
    
const handleSubmit = event => {

  event.preventDefault();
  onSubmit(credentials);

};

const handleChange = event => { 
  setCredentials (oldCredentials => ({
    ...oldCredentials,
    [event.target.name]: event.target.value,
  }));
}     
const {username, password} = credentials;   

return (
    <form className="loginForm" onSubmit={handleSubmit} >
      <Input
        type="text"
        name="username"
        label="phone, email or username"
        className="loginForm-field"            
        value={username}
        onChange={handleChange}
      />
      <Input
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
        disabled={isLoading || !credentials.username || !credentials.password}
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