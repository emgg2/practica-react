import React from 'react';
import Input from '../shared/Input';
import MultiSelectTags from '../shared/MultiSelectTags';
import SelectSale from '../shared/SelectSale';
import pT from 'prop-types';


const SearchingFormPage = ({OnChange, products}) => {
    const [searchName, setSearchName] = React.useState("");
    const [searchSale, setSearchSale] = React.useState("");
    const [searchTags, setSearchTags] = React.useState("");

    const handleChange = event => setSearchName (event.target.value);
    
    const handleChangeSelect = event => {  
    }

    const handleChangeMultiSelect = event => {                
        let tags = [];
        let nameEle = "";

        event.forEach(element => {
                tags.push(element.value);                   
                nameEle = element.name;
        });              
        
        // setProductData (oldProductData => ({
        //         ...oldProductData,
        //         [nameEle]: tags,
        // }))
    }

    
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