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
import { logout } from './api/auth';
import { AuthContextProvider } from './components/auth/context'


function App({isInitiallyLogged}) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);
  
  const handleOnLogin = () => setIsLogged(true);
  const handleOnLogout = () => {
    setIsLogged(false);
    logout();    
  }

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
        <PrivateRoute isLogged="isLogged" path="/product/:productId" component={ProductDetailPage} />                  
        <PrivateRoute  isLogged={isLogged} path="/product" >
          	{({history}) => 
			  	<NewProductPage 
				  	history="history" 
				/>
			}
        </PrivateRoute> 
        <Route path="/login">         
          	{({ history, location }) => 
		  		<LoginPage
					onLogin={handleOnLogin}
					history={history}
					location={location}
            	/> 
        	}
        </Route>   
        <PrivateRoute isLogged={isLogged} exact path="/" >
          	{({history}) => 
			  	<ProductPage 
				  	history={history} 
				/>
			}
        </PrivateRoute> 
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
