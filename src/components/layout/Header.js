import React from 'react';
import classNames from 'classnames';
import ButtonMenu from '../shared/ButtonMenu';
import AuthButton from '../auth/AuthButton/';
import pT from 'prop-types';
import {Link} from 'react-router-dom';
import './Header.css';


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

Header.propTypes = {
    className: pT.string,
}

export default Header;