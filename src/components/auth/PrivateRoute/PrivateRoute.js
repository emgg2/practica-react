import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import storage from '../../utils/storage'
import  AuthContext  from '../context';

const PrivateRoute = props => {
		const { isLogged } = React.useContext(AuthContext);
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