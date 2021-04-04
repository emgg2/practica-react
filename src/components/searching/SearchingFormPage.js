import React, { useState, useEffect } from 'react';
import Input from '../shared/Input';
import MultiSelectTags from '../shared/MultiSelectTags';
import SelectSale from '../shared/SelectSale';
import { getProducts } from '../../api/products';
import pT from 'prop-types';


const SearchingFormPage = ({onChange, items}) => {
    const [results, setResults] = useState(items);  
    const [searchName, setSearchName] = useState('');  
    const [searchSale, setSearchSale] = useState('');
    const [searchTags, setSearchTags] = useState('');
    const [filters, setFilters] = useState({
        name: '',
        sale: '',
        tags: ''
  
    });
    
    const handleChange = event => setSearchName(event.target.value);
    const handleChangeSelect = event =>{debugger; setSearchSale(event.value); }     
    const handleChangeMultiSelect = event => {                
        let tags = [];

        event.forEach(element => {
            tags.push(element.value);                       
        });              
    
        setSearchTags(tags);        
    }

    function filterByName(obj) {          
        return ('name' in obj && obj.name.toLowerCase().includes(searchName.toLowerCase())) ? true : false;        
    }

    function filterBySale(obj) {
       return ('sale' in obj && obj.sale === searchSale) ? true : false;        
    }
   
    // React.useEffect(() => {
    //     debugger;
    //     if(searchSale.length > 0) { setResults(results.filter(filterBySale)) }    
    //     onChange(results);        
    // }, [searchSale])


    useEffect(() => {     
        
        if(searchName.length > 0  ) {
            debugger;
            const res = results.filter(filterByName);
            setResults(res);
            onChange(res);          
            
        }else
        {
            onChange(items);
        }                
    }, [searchName, ])

    useEffect(()=> {
     

        if(searchSale !== "" ) {
            const res = items.filter(filterBySale)
            setResults(res);
            onChange(res);          
            
        }else 
        {
            onChange(items);
        }                
    },[searchSale])

   //  console.log("render", searchName);
     console.log(items);
    return (
        <React.Fragment>
            <Input 
                type="text"
                name="name"
                label="Descripción"
                className="loginForm-field"
                value={searchName}
                autoFocus
                onChange={handleChange}
            />
            <SelectSale 
                onChange={handleChangeSelect}
                
            />            
            <MultiSelectTags
                onChange={handleChangeMultiSelect}
            />
            
        </React.Fragment>
    );
};

// SearchingFormPage.propTypes {

// }

export default SearchingFormPage;