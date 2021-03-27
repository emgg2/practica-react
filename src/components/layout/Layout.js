import React from 'react';
import Spinner from '../shared/Spinner';
import Header from './Header';
import './Layout.css';


function Layout ({children, title, isLoading, error, onLogout, ...props }) {

    

    return (
        <div className ="layout">

            <Header className ="layout-header bordered"  onLogout={onLogout} {...props}/>
            
            {isLoading && <Spinner />}       
            <main className="layout-main bordered">
                <h2 className="layout-title bordered">{title}</h2>
                {error && <div className="loginPage-error">{error.message}</div> }
                <section className="layout-content">{children}</section>
            </main>
            <footer className ="layout-footer bordered">@2021 - Autor: Eva Garcia</footer> 
        </div>

    );

}

export default Layout;
