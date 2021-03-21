import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductPage } from './components/products';
import Button from './components/shared/Button';
import LoginPage from './components/auth/LoginPage/LoginPage';


function App() {
  const [isLogged, setIsLogged] = React.useState(false);
  const handleOnLogin = () => setIsLogged(true);
  const handleOnLogout = () => setIsLogged(false);
  return (
    <div className="App">      
        {isLogged ? (
          <ProductPage isLogged={isLogged} onLogout={handleOnLogout} />
        ) : (
          <LoginPage onLogin={handleOnLogin}/> 
        )}
     
    </div>
  );
}

export default App;
