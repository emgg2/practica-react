import React from 'react';
import Spinner from '../shared/Spinner';
import Header from './Header';
import Advert from '../shared/Advert'
import './Layout.css';

//TODO: tratamiento de error y spinner, hacerlo con un custom hook 

function Layout ({children, title, ...props }) {
//     const [isLoading, setIsLoading] = React.useState(false); 
//     const [error, setError] = React.useState(null);
//     const handleError = (error) => setError(error);
//   const handleLoading = (value) => setIsLoading(value);

    return (
        <div className ="layout">

            <Header className ="layout-header bordered" {...props}/>
            
            {/* {isLoading && <Spinner />}        */}
            <main className="layout-main bordered">
                <h2 className="layout-title bordered">{title}</h2>
                {/* {error && <Advert /> } */}
                <section className="layout-content">{children}</section>
            </main>
            <footer className ="layout-footer bordered">@2021 - Autor: Eva Garcia</footer> 
        </div>

    );

}

export default Layout;
