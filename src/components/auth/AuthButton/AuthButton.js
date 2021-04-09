import T from 'prop-types';
import { Link } from 'react-router-dom';
import { ButtonMenu } from '../../shared';
import { logout } from '../../../api/auth';
import { AuthContextConsumer } from '../context';


const AuthButton = ({ className, isLogged, onLogout }) => {
  const handleLogoutClick = () => {
    logout().then(onLogout);
  };

  const props = isLogged
    ? { onClick: handleLogoutClick, children: 'Log out' }
    : {
        as: Link,
        to: '/login',
        children: 'Log in',
      };

  return <ButtonMenu className={className} {...props} />;
};

AuthButton.propTypes = {
  className: T.string,
  isLogged: T.bool,
  onLogout: T.func.isRequired,
};

AuthButton.defaultProps = {
  isLogged: false,
};

const connectedAuthButton = (props) => {
   return ( 
   <AuthContextConsumer>
     {value => {
        return(
          <AuthButton 
            isLogged={value.isLogged} 
            onLogout={value.onLogout} 
            {...props} 
          />
        );
      }
    }
      
   </AuthContextConsumer>
   );
}



export default connectedAuthButton;
