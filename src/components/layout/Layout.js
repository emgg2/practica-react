import React from 'react';
import Spinner from '../shared/Spinner';
import Header from './Header';
import Advert from '../shared/Advert'
import pT from 'prop-types';
import './Layout.css';

function Layout ({children, title, error, isLoading,  ...props }) {
    return (
        <div className ="layout">
            <Header className ="layout-header bordered" {...props}/>            
            {isLoading && <Spinner />}       
            <main className="layout-main bordered">
                <h2 className="layout-title bordered">{title}</h2>
                {error && <Advert 
                            message={error}
                            /> } 
                <section className="layout-content">{children}</section>
            </main>
            <footer className ="layout-footer bordered">@2021 - Autor: Eva Garcia</footer> 
        </div>

    );
}

Layout.propTypes = {
    title: pT.string,
    error: pT.bool.isRequired,
    isLoading: pT.bool.isRequired
}

Layout.defaultProps = {    
    title: ''
  }

export default Layout;
