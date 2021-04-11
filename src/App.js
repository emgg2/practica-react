import React from 'react';
import './App.css';
import { ProductPage } from './components/products';
import { LoginPage, PrivateRoute } from './components/auth/';
import { Switch, Route, Redirect} from 'react-router-dom';
import { NotFound } from './components/shared';
import NewProductPage from './components/products/NewProductPage/NewProductPage';
import ProductDetailPage from './components/products/ProductDetailPage/ProductDetailPage';
import { logout } from './api/auth';
import { AuthContextProvider } from './components/auth/context'


function App({isInitiallyLogged}) {

  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);
  
  const ref = React.useRef(null);
  const handleOnLogin = () => setIsLogged(true);
  const handleOnLogout = () => {
    setIsLogged(false);
    logout();    
  }

  React.useEffect(() => {
	console.log(ref.current);
  }, []);

  const authValue = {
    isLogged,
    onLogout: handleOnLogout,
    onLogin: handleOnLogin,
  }
    

  //TODO: REVISAR TODOS LOS TYPES
  return (        
    <div className="App">  
    <AuthContextProvider value={authValue}>
      <Switch>        
        <PrivateRoute path="/product/:productId">
			{routeProps => <ProductDetailPage ref={ref} {...routeProps} />}	
		</PrivateRoute> 
        <PrivateRoute path="/product" component={NewProductPage} />       	
        <Route path="/login" component={LoginPage} />            	
        <PrivateRoute exact path="/" component={ProductPage} />          	
        <Route path="/404" component={NotFound} />        
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>        
      </AuthContextProvider>  
    </div>
  );
}

export default App;
