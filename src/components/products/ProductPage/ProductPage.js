import React, { useState, useEffect } from 'react';
import { getProducts } from '../../../api/products'
import Layout from '../../layout/Layout';
import './ProductPage.css';
import pT from 'prop-types';
import ProductsAvailable from '../ProductsAvailable/ProductsAvailable';
import NoProductAvailable from '../NoProductAvailable/NoProductAvailable';


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
    const handleIsSearching = () => setIsSearching(!isSearching);
    
   return (
        <Layout 
            title={(products.length>0 ? 'Productos Disponibles' : '')}
            { ...props } 
        >
           {products.length>0 
           ? 
            <ProductsAvailable
                products={products}
                handleFilteredProducts={handleFilteredProducts}
                handleIsSearching={handleIsSearching} 
                filteredProducts={filteredProducts}
                isSearching={isSearching}
                {...props}
        />
        
         
           : <NoProductAvailable />}
        </Layout>
    );
}

//TODO: RELLENAR PROPTYPES

ProductPage.propTypes = {

}
export default ProductPage;