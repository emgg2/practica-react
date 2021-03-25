import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductPage } from './components/products';
import Button from './components/shared/Button';
import LoginPage from './components/auth/LoginPage/LoginPage';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import { NotFound } from './components/shared';
import NewProductPage from './components/products/NewProductPage/NewProductPage';
import ProductDetailPage from './components/products/ProductDetailPage/ProductDetailPage';

function App() {
  const [isLogged, setIsLogged] = React.useState(false);
  const handleOnLogin = () => setIsLogged(true);
  const handleOnLogout = () => setIsLogged(false);
  return (
     <Router>

      <Switch>        
        <Route path="/login">
        <LoginPage onLogin={handleOnLogin}/>     
        </Route>   
        <Route exact path="/">
          <ProductPage isLogged={isLogged} onLogout={handleOnLogout} />
        </Route> 
        <Route path="/product/:productId">
           <ProductDetailPage></ProductDetailPage>
        </Route> 
        <Route path="/product">
           <NewProductPage></NewProductPage>
        </Route> 
        <Route path="/404" component="NotFound" />

        
        <Route>
          <Redirect to="/404" />
        </Route>
         

      </Switch>       
     <div className="App">         
    
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
