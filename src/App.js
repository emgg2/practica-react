import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductPage } from './components/products';
import Button from './components/shared/Button';
import LoginPage from './components/auth/LoginPage/LoginPage';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import { NotFound } from './components/shared';

function App() {
  const [isLogged, setIsLogged] = React.useState(false);
  const handleOnLogin = () => setIsLogged(true);
  const handleOnLogout = () => setIsLogged(false);
  return (
     <Router>

      <Switch>        
        <Route path="/login" component="LoginPage" />
        <Route exact path="/" component="ProductPage" />
        <Route path="/404" component="NotFound" />

        
        <Route>
          <Redirect to="/404" />
        </Route>
         

      </Switch>       
     <div className="App">     

     <NotFound /> 
    
        {/* {isLogged ? (
          <ProductPage isLogged={isLogged} onLogout={handleOnLogout} />
        ) : (
          <LoginPage onLogin={handleOnLogin}/> 
        )} */}
     
    </div>
    </Router>
  );
}

export default App;
