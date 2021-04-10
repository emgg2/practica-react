import React from 'react';
import { getProducts } from '../../../api/products'

import './ProductPage.css';

import Layout from '../../layout/Layout';
import ProductsAvailable from '../ProductsAvailable/ProductsAvailable';
import NoProductAvailable from '../NoProductAvailable/NoProductAvailable';

import useError from '../../../hooks/useError';
import useIsLoading from '../../../hooks/useError';


const ProductPage = ({ ...props }) => {
    const [products, setProducts] = React.useState([]);    
    const [filteredProducts, setFilteredProducts] = React.useState([]);
    const [isSearching, setIsSearching] = React.useState(false);
    const [error, handleError] = useError(false);
    const [isLoading, handleIsLoading] = useIsLoading(false);
  
    React.useEffect(() => {
        async function getProductList () {
        try {            
            handleIsLoading(true);                       
           const prdt = await getProducts();
            setProducts(prdt);
            setFilteredProducts(prdt);     

        } catch (error) {        
            handleError(error.message);           
        }finally
        {            
            handleIsLoading(false);
        }
        }
    getProductList();
        
    },[]);

    const handleFilteredProducts = (products) => setFilteredProducts(products);
    const handleIsSearching = () => setIsSearching(!isSearching);
    
   return (
        <Layout 
            title={(products.length>0 ? 'Productos Disponibles' : '')}
            error={error}
            isLoading={isLoading}
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


export default ProductPage;