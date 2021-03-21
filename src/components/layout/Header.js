import React from 'react';
import classNames from 'classnames';
import './Header.css';
import Button from '../shared/Button';
import {ReactComponent as Icon } from '../../assets/twitter.svg';

const Header = ({className, ...props}) => {
    console.log(props)

    const {isLogged, onLogout} = props;      
     
    return (
        <header className={classNames('header', classNames)} {...props}>
          {/* <Link to="/"> */}
                <div className="header-logo">
                    <Icon width="32" height="32"/>
                </div>
                <nav className="header-nav">
                     {/* </Link> */}
                <Button
                    to="/google"
                    variant="primary"
                    className='header-button'>Google</Button>
                {isLogged ? (
                    <Button
                    onClick={onLogout}                    
                    className='header-button'>Log out</Button>
                ):                
                (
                    <Button
                    to="/login"                                      
                    className='header-button'>Log in</Button>
                )}  
            </nav>

        </header>
    );

};

export default Header;