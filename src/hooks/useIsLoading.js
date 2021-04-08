import React from 'react'

const useIsLoading = (initialValue) => {    
    const [isLoading, setIsLoading] = React.useState(initialValue);

    const handleIsLoading = event => { 
        setIsLoading (event);
    }; 
   
    return [
        isLoading, 
        handleIsLoading       
        ];    
}

export default useIsLoading;