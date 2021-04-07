import React from 'react'

const useForm = (initialValue) => {    
    const [value, setValue] = React.useState(initialValue);

    const handleChange = event => { 
        setValue (oldValue => ({
          ...oldValue,
          [event.target.name]: event.target.value,
        }));
    }; 

    const handleCheck = event => {
        debugger;
        setValue (oldValue => ({
            ...oldValue,
            [event.target.name]: !value[event.target.name],
          }));
    }

    const handleChangeSelect = event => {  
        setValue (oldProductData => ({
                ...oldProductData,
                [event.name]: event.value,
        }))
    };
    
    const handleChangeMultiSelect = event => {                
        let tags = [];
        let nameEle = "";

        event.forEach(element => {
                tags.push(element.value);                   
                nameEle = element.name;
        });              
        
        setValue (oldProductData => ({
                ...oldProductData,
                [nameEle]: tags,
        }));
    }

    const handleFile = e => {		
			setValue(oldProductData => ({
			...oldProductData, 
			['photo']: e
			}))  			  
	}

   

    return [
        value, 
        handleChange,       
        handleCheck,
        handleChangeSelect,
        handleChangeMultiSelect,
        handleFile,
        ];
    
}

export default useForm;