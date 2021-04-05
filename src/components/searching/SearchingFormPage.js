import React, { useState, useEffect } from 'react';
import Input from '../shared/Input';
import MultiSelectTags from '../shared/MultiSelectTags';
import SelectSale from '../shared/SelectSale';
import { getProducts } from '../../api/products';
import pT from 'prop-types';


const SearchingFormPage = ({onChange, items}) => {    
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
        debugger;      
        return ('name' in obj && obj.name.toLowerCase().includes(searchName.toLowerCase())) ? true : false;        
    }

    function filterBySale(obj) {
        debugger;
       return ('sale' in obj && obj.sale === searchSale) ? true : false;        
    }

    function filterByTags(obj) {
        debugger;
        return ('tags' in obj  ) ? true : false;
    }

    function filterByNameAndTags(obj) {
        return (
            'name' in obj &&         
            'tags' in obj &&
             obj.name.toLowerCase().includes(searchName.toLowerCase())            
        ) ? true: false;
    }

    function filterByNameAndSale(obj) {
        debugger;
        return (
            'name' in obj &&
            'sale' in obj && 
            obj.name.toLowerCase().includes(searchName.toLowerCase()) &&            
            obj.sale === searchSale            
        ) ? true: false;
    }

    function filterBySaleAndTags(obj) {
        return (            
            filterBySale &&
            filterByTags
        ) ? true: false;
    }

    function filterByAll(obj) {
        return (
            filterByName &&
            filterBySale &&
            filterByTags

        ) ? true: false;
    }
   
    // React.useEffect(() => {
    //     debugger;
    //     if(searchSale.length > 0) { setResults(results.filter(filterBySale)) }    
    //     onChange(results);        
    // }, [searchSale])


    useEffect(() => {     
        let res = null;
        debugger;
        
        if( searchName.length > 0 && 
            searchTags.length > 0 && 
            searchSale !=="") {
            const res = items.filter(filterByAll);
            onChange(res);

        }else if(searchName.length > 0 && 
                searchTags.length > 0) {
            const res = items.filter(filterByNameAndTags);       
            onChange(res);
        }else if(searchName.length > 0 && 
                searchSale !=="" ) {
            const res = items.filter(filterByNameAndSale);            
            onChange(res);
        }else if(searchTags.length > 0 &&
                 searchSale !=="") {
            const res = items.filter(filterBySaleAndTags);            
            onChange(res);
        }else if(searchName.length > 0)
        {
            const res = items.filter(filterByName);                       
            onChange(res);
        }else if(searchSale !=="")
        {
            const res = items.filter(filterBySale);
            onChange(res);
        }else if(searchTags.length > 0){
            const res = items.filter(filterByTags);
            onChange(res);
        }else 
        {
            onChange(items)
        }        

    }, [searchName, searchSale, searchTags ])


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