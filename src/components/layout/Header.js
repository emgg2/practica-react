import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import './Header.css';
import Button from '../shared/Button';
import {ReactComponent as Icon } from '../../assets/twitter.svg';

const Header = ({ className, onLogout, ...props }) => {
     
    return (
        <header className={classNames('header', classNames)} {...props}>
                <Link to="/"> 
                    <div className="header-logo">
                        <Icon width="32" height="32"/>
                    </div>
                </Link> 
                <nav className="header-nav">
                     
                <Link to="/product"> 
                <Button
                    to="/google"
                    variant="primary"
                    className='header-button'>Product</Button>
                </Link>
                <Button
                    onClick={onLogout}                    
                    className='header-button'>Log out</Button>
            </nav>

        </header>
    );

};

export default Header;