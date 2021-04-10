import React from 'react';
import '../ProductPage/ProductPage.css';
import pT from 'prop-types';
import ProductList from '../ProductPage/ProductList';
import SearchingFormPage from '../../searching/SearchingFormPage';
import DropdownHeader from '../../shared/DropdownHeader';
import NoResultsFound from '../../searching/NoResultsFound';

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
            {filteredProducts.length > 0
            ? <ProductList
                products={filteredProducts} 
                {...props}
                />          
            : <NoResultsFound/>    

            }           
            
        </React.Fragment>      
    );
};

ProductsAvailable.propTypes = {
    products: pT.array.isRequired,
    handleFilteredProducts: pT.func.isRequired,
    handleIsSearching: pT.func.isRequired,
    filteredProducts: pT.array.isRequired,
    isSearching: pT.bool.isRequired
}
export default ProductsAvailable;