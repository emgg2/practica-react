import React, { useState, useEffect } from 'react';
import Input from '../shared/Input';
import MultiSelectTags from '../shared/MultiSelectTags';
import SelectSale from '../shared/SelectSale';
import { getProducts } from '../../api/products';
import pT from 'prop-types';


const SearchingFormPage = ({onChange, items}) => {  
    const [searchName, setSearchName] = useState('');  
    const [searchSale, setSearchSale] = useState('');
    const [filters, setFilters] = useState({
        name: '',
        sale: '',
        tags: ''
  
    });
    
    const handleChange = event => setSearchName(event.target.value);
    const handleChangeSelect = event =>{debugger; setSearchSale(event.value); }
        
    const handleChangeMultiSelect = event => {                
        let tags = [];
        let nameEle = "";

        event.forEach(element => {
            tags.push(element.value);                   
            nameEle = element.name;
        });              
    
        setFilters (oldProductData => ({
            ...oldProductData,
            [nameEle]: tags,
        }))
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
        
        if(searchName.length > 0) {
            onChange(items.filter(filterByName));          
            
        }else 
        {
            onChange(items);
        }                
    }, [searchName])

    useEffect(()=> {
        debugger;

        if(searchSale !== "" ) {
            onChange(items.filter(filterBySale));          
            
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