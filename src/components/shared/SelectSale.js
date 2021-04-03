import React from 'react';
import Select from 'react-select';

const SelectSale = ({onChange}) => {
    const optionsItems = [
        { value: true, label: 'En Venta' , name:'sale'},
        { value: false, label: 'Se Busca', name:'sale' },
      ];
    
    return (
        <Select
            name="sale"
            options={optionsItems}
            onChange={onChange}
        />
    );
};

export default SelectSale;