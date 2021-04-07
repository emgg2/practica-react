import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import  {useAuthContext}  from '../context';

const PrivateRoute = props => {
	const { isLogged } = useAuthContext();
   const routeProps =  isLogged
     ? props
     : {
         children: ({location}) => (
            <Redirect to={{ pathname: '/login', state: { from:location }}} />
         )
       };         

    return <Route {...routeProps} />
    
}

export default PrivateRoute;