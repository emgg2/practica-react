import React from 'react';
import '../ProductPage/ProductPage.css';
import pT from 'prop-types';
import ProductList from '../ProductPage/ProductList';
import SearchingFormPage from '../../searching/SearchingFormPage';
import DropdownHeader from '../../shared/DropdownHeader';

const ProductsAvailable = ({
    products, 
    handleFilteredProducts, 
    handleIsSearching, 
    filteredProducts, 
    isSearching,  
    ...props }) => {
    
    
   return (        
        <React.Fragment>      
            <DropdownHeader
                    onClick = {handleIsSearching}
                    title = "Búsqueda Avanzada" 
                    />       
            {isSearching ? <SearchingFormPage 
                items={products}
                onChange={handleFilteredProducts}
            />:''}             
            <ProductList
                products={filteredProducts} 
                {...props}
            />          
        </React.Fragment>      
    );
};

//TODO: RELLENAR PROPTYPES

ProductsAvailable.propTypes = {

}
export default ProductsAvailable;