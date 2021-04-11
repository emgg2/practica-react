import React from 'react';
import './NotFound.css';

function NotFound({message}){
    return( 
        <div className="containerNPA">
            <div className="noProductAvailable">
                <img src='/img/sad.jpg' className="imageNPA"></img>
                <p >{message}</p>
               
            </div>
        </div>
        
    );
}
export default NotFound;
