import React from 'react';
import { getProducts } from '../../../api/products';
import scopedStyles from './ProductPage.module.css';
import './ProductPage.css';
import Layout from '../../layout/Layout';
import Spinner from '../../shared/Spinner';
import {Link} from 'react-router-dom';
import ProductItem from './ProductItem';
import pT from 'prop-types';
import SearchingFormPage from '../../searching/SearchingFormPage';


const ProductPage = ({ isLogged, onLogout, history, ...props }) => {
    
    const [products, setProducts] = React.useState([]);
 
  
    React.useEffect(() => {
        async function getProductList () {
        try {            
           // onLoading(true);                       
            setProducts( await getProducts());            
        } catch (error) {        
           // onError(error);            
        }finally
        {            
         //   onLoading(false);
        }
    }
    getProductList();
        
    },[]);

   const handleSearching = () => {

   };

    const items = products.map(product =>{        
     return (
        <Link to={`/product/${product.id}`} key={product.id}>            
        <ProductItem product={product} key={product.id}  />
       </Link>
    )});

    return (
        <React.Fragment>
            <div className="searchingForm">
                <SearchingFormPage 
                    onChange={handleSearching}
                />
            </div> 
            <Layout title="Product List" { ...props } >            
                <div className={scopedStyles.content}> {items} </div>                
            </Layout> 
        </React.Fragment>    
    );
}

//TODO: RELLENAR PROPTYPES

ProductPage.propTypes = {

}
export default ProductPage;