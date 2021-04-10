import React, { useState, useEffect } from 'react';
import Input from '../shared/Input';
import MultiSelectTags from '../shared/MultiSelectTags';
import SelectSale from '../shared/SelectSale';
import pT from 'prop-types';
import RangeSelector from '../shared/RangeSelector';

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import 'bootstrap/dist/css/bootstrap.css';
import './SearchingPage.css';


const SearchingFormPage = ({onChange, items}) => {    
    const [searchName, setSearchName] = useState('');  
    const [searchSale, setSearchSale] = useState('');
    const [searchTags, setSearchTags] = useState('');
    const [searchRange, setSearchRange] = useState (0);
        
    const handleChange = event => setSearchName(event.target.value);
    const handleChangeSelect = event =>setSearchSale(event.value); 
    const handleRange=event=>setSearchRange(event.target.value);   
    const handleChangeMultiSelect = event => {                
        let tags = [];
        event.forEach(element => {
            tags.push(element.value);                       
        });              
    
        setSearchTags(tags);        
    }    

    function filterByAll(obj) {
        let nameFound = true;
        let saleFound = true;
        let tagsFound = true;
        let priceFound = true;

        if(searchName.length > 0) {
            nameFound =  ('name' in obj && obj.name.toLowerCase().includes(searchName.toLowerCase()))  ;
        }
        if(searchSale !== "") {
            saleFound = ('sale' in obj && obj.sale === searchSale);            
        }

        if(searchTags.length > 0) {
            let tagFound = [];
            searchTags.forEach(tag => { 
                tagFound.push(obj.tags.find(element => element === tag));
            });
            tagsFound = ('tags' in obj && !tagFound.includes(undefined));
        }

        if(searchRange > 0) {
            priceFound = ('price' in obj && obj.price <= searchRange); 
        }

        return (            
            nameFound &&            
            saleFound &&            
            tagsFound  &&
            priceFound
            
        ) ? true: false;
    }
 
    useEffect(() => {    
        if( searchName.length > 0 ||
            searchTags.length > 0 || 
            searchSale !=="" ||
            searchRange > 0) {
                const res = items.filter(filterByAll);
                onChange(res);           
        }else 
        {
            onChange(items)
        }             
    }, [searchName, searchSale, searchTags, searchRange ])

   
    return (

        <div className="formSearching">
            <Input 
                type="text"
                name="name"
                label="Descripción"
                className="loginForm-field"
                value={searchName}
                autoFocus
                onChange={handleChange}
            />
            <RangeSelector
                value={searchRange}
                onChange={handleRange}
                label="Precio"
                
            />
            <SelectSale 
                onChange={handleChangeSelect}
                label="Estado"
                
            />            
            <MultiSelectTags
                onChange={handleChangeMultiSelect}
                label="Tags"
            />

            
        </div>
    );
};

SearchingFormPage.propTypes = {
    onChange: pT.func.isRequired,
    items: pT.array.isRequired
}

export default SearchingFormPage;