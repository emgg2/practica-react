import React from 'react';
import classNames from 'classnames';
import './Header.css';
import Button from '../shared/Button';
import {ReactComponent as Icon } from '../../assets/twitter.svg';

const Header = ({className, ...props}) => {

    return (
        <header className={classNames('header', classNames)} {...props}>
            <nav className="header-nav">
                <div className="header-logo">
                    <Icon width="32" height="32"/>
                </div>
                <Button
                    to="/google"
                    variant="primary"
                    className='header-button'>Google</Button>
                {/* {loggedUserId ? (
                    <Button
                    onClick={() => logout().then(onLogout)}
                    
                    className='header-button'>Log out</Button>
                ):
                
                (
                    <Button
                    to="/login"                  
                    
                    className='header-button'>Log in</Button>
                )}   */}
            </nav>

        </header>
    );

};

export default Header;