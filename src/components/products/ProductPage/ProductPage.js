import React, { useState, useEffect } from 'react';
import { getProducts } from '../../../api/products'
import Layout from '../../layout/Layout';

import './ProductPage.css';

import Spinner from '../../shared/Spinner';
import ProductList from './ProductList';


import pT from 'prop-types';
import SearchingFormPage from '../../searching/SearchingFormPage';
import { Button } from '../../shared';
import DropdownHeader from '../../shared/DropdownHeader';


const ProductPage = ({ ...props }) => {
    const [products, setProducts] = useState([]);    
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
  
    React.useEffect(() => {
        async function getProductList () {
        try {            
           // onLoading(true);                        
           const prdt = await getProducts();
            setProducts(prdt);
            setFilteredProducts(prdt);     

        } catch (error) {        
           // onError(error);            
        }finally
        {            
         //   onLoading(false);
        }
        }
    getProductList();
        
    },[]);

    const handleFilteredProducts = (products) => setFilteredProducts(products);
    const handelIsSearching = () => setIsSearching(!isSearching);
    
    return (
        <Layout title="Product List" { ...props } >
                <DropdownHeader
                    onClick = {handelIsSearching}
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
        </Layout>
    );
}

//TODO: RELLENAR PROPTYPES

ProductPage.propTypes = {

}
export default ProductPage;