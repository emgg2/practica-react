import React, { useState, useEffect } from 'react';
import { getProducts } from '../../../api/products';

import './ProductPage.css';

import Spinner from '../../shared/Spinner';
import ProductList from './ProductList';


import pT from 'prop-types';
import SearchingFormPage from '../../searching/SearchingFormPage';


const ProductPage = ({ ...props }) => {
    const [products, setProducts] = useState([]);    
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    React.useEffect(() => {
        console.log("ejecuto use effect product page");
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

    


//     function filterByName(obj, searchName) {          
//         return ('name' in obj && obj.name.toLowerCase().includes(searchName.toLowerCase())) ? true : false;        
//     }
        
//     function filterBySale(obj, searchSale) {
//         return ('sale' in obj && obj.sale.includes(searchSale)) ? true : false;        
//     }

//     function filterByTags(obj, searchTags) {
//         return ('tags' in obj && obj.tags.includes)
//     }



//    const handleSearching = (filters) => {
//     console.log("eva", results)

//     let res;
//         // console.log("buscando", filters);

//          if(filters.name.length > 0) {
//               res = results.filter((result)=>filterByName(result, filters.name)); 
             
//          }

//          console.log("filtros")
//              console.log(res)
//         // if(filters.tags.length > 0) {
            

//         // }

//         // if(filters.sale.length > 0) {

//         // }
//         setResults(results);

//    };


    console.log('render product page');
    return (
        <React.Fragment>
            <SearchingFormPage 
                items={products}
                onChange={handleFilteredProducts}
            />
             
            <ProductList
                products={filteredProducts} 
                {...props}
            />           
        </React.Fragment>    
    );
}

//TODO: RELLENAR PROPTYPES

ProductPage.propTypes = {

}
export default ProductPage;