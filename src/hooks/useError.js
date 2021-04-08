import React from 'react'

const useError = (initialValue) => {    
    const [error, setError] = React.useState(initialValue);

    const handleError = event => { 
        setError (event);

    }; 
   
    return [
        error, 
        handleError       
        ];    
}

export default useError;