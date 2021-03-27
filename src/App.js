import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductPage } from './components/products';
import Button from './components/shared/Button';
import { LoginPage, PrivateRoute } from './components/auth/';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import { NotFound } from './components/shared';
import NewProductPage from './components/products/NewProductPage/NewProductPage';
import ProductDetailPage from './components/products/ProductDetailPage/ProductDetailPage';


function App() {
  const [isLogged, setIsLogged] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false); 
  const [error, setError] = React.useState(null);
  const handleOnLogin = () => setIsLogged(true);
  const handleOnLogout = () => setIsLogged(false);
  const handleError = (error) => setError(error);
  const handleLoading = (value) => setIsLoading(value);

  return (
     <Router>

       <Switch>        
       <PrivateRoute isLogged="isLogged" path="/product/:productId" component={ProductDetailPage}>         
         </PrivateRoute>
        <Route path="/login">
         
        {({ history }) => <LoginPage
           isLoading={isLoading}
           error={error}
           onError={handleError}
           onLogin={handleOnLogin}
           onLoading={handleLoading}
           history={history} /> 
        }
        </Route>   
        <PrivateRoute isLogged={isLogged} exact path="/" >
           {({history}) => <ProductPage isLogged={isLogged} onLogout={handleOnLogout} history={history} />}
        </PrivateRoute> 
        <PrivateRoute  isLogged={isLogged} path="/product" >
           <NewProductPage></NewProductPage>
        </PrivateRoute> 
        <Route path="/404" component={NotFound} />

        
        <Route>
          <Redirect to="/404" />
        </Route>
         

      </Switch>        
      
     <div className="App">         
    
         {/* {isLogged ? (
          <ProductPage 
          isLoading={isLoading}
          error={error}
          isLogged={isLogged} 
          onLogout={handleOnLogout}
          onError={handleError}
          onLoading={handleLoading} />
        ) : (
          <LoginPage
           isLoading={isLoading}
           error={error}
           onError={handleError}
           onLogin={handleOnLogin}
           onLoading={handleLoading} /> 
        )}  */}

     
     
    </div>
    </Router>
  );
}

export default App;
