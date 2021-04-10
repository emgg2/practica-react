import React from 'react';
import './NotFound.css';

function NotFound(){
    return(     
    <div className="containerNF">
        <div className="notFound">
            <img src='/img/sad.jpg' className="imageNF"></img>
            <p>404 - PAGINA NO ENCONTRADA</p>
           
        </div>
    </div>
    );
}
export default NotFound;
