import React from 'react';
import Input from '../shared/Input';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const SearchingFormPage = ({OnChange, products}) => {
    const [searchName, setSearchName] = React.useState("");
    const [searchSale, setSearchSale] = React.useState("");
    const [searchTags, setSearchTags] = React.useState("");

    const [tagsOptions, setTagsOptions] = React.useState({
        value: '',
        label: '',
        name:'tags'
    });

    const optionsItems = [
        { value: true, label: 'En Venta' , name:'sale'},
        { value: false, label: 'Se Busca', name:'sale' },
      ];

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

    const animatedComponents = makeAnimated();
    return (
        <React.Fragment>
            <Input 
                type="text"
                name="name"
                label="Descripción"
                className="loginForm-field"
                value={searchName}
                autofocus
                onChange={handleChange}
            />
            <Select
                name="sale"
                options={optionsItems}
                onChange={handleChangeSelect}
            />
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={[tagsOptions[1],tagsOptions[1]]}
                isMulti
                name="tags"
                onChange={handleChangeMultiSelect}
                options={tagsOptions}
            />
        </React.Fragment>
    );
};

export default SearchingFormPage;