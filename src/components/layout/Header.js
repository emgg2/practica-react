import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import './Header.css';
import Button from '../shared/Button';
import {ReactComponent as Icon } from '../../assets/twitter.svg';
import AuthButton from '../auth/AuthButton/';

const Header = ({ className, ...props }) => {
     
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
                    variant="primary"
                    className='header-button'>Product</Button>
                </Link>   
                <AuthButton className="header-button" />
            </nav>

        </header>
    );

};

export default Header;