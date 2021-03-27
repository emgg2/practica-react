import {Redirect, Route} from 'react-router-dom';

const PrivateRoute =({isLogged, ...props}) => {
    return isLogged ? (<Route {...props} />)
     : (
     <Redirect to ={{
         pathname: "/login",
        state: { from:location}}} />
     )
}

export default PrivateRoute;