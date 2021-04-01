import {Redirect, Route} from 'react-router-dom';

const PrivateRoute =({isLogged, ...props}) => {
   if(!isLogged){
    debugger;
    console.log("hla")   
   }  
   debugger;
    return ( isLogged
     ? <Route {...props} />
     : (
         <Route >
            {({ location }) => (
             <Redirect to={{ pathname: '/login', state: { from:location }}} />
         )}
         </Route>
         
     ));
    
}

export default PrivateRoute;