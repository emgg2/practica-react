import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import './Header.css';
import ButtonMenu from '../shared/ButtonMenu';
import {ReactComponent as Icon } from '../../assets/twitter.svg';
import AuthButton from '../auth/AuthButton/';

const Header = ({ className, ...props }) => {
     
    return (
        <header className={classNames('header', classNames)} >
                <Link to="/"> 
                    <div className="header-logo">
                        Nodepop
                        
                    </div>
                </Link> 
                <nav className="header-nav">
                     
                <Link to="/product"> 
                <ButtonMenu                    
                    variant="primary"
                    className='header-button'>Product</ButtonMenu>
                </Link>   
                <AuthButton className="header-button" />
            </nav>

        </header>
    );

};

export default Header;