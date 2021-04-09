import React , {useState, useEffect} from 'react';
import './ProductDetailPage.css';
import Layout from '../../layout/Layout';
import { getProductById } from '../../../api/products';
import { Redirect } from 'react-router';
import DeleteButton from '../../shared/DeleteButton';

import useError from '../../../hooks/useError';
import useIsLoading from '../../../hooks/useIsLoading';
import ProductDetail from './productDetail';

const ProductDetailPage = ({match, ...props}) => {
    const [product, setProduct] = useState(null);
    const [error, handleError] = useError(false);
    const [isLoading, handleIsLoading] = useIsLoading(false);       
    
    useEffect(()=> {
         async function executeGetProduct (){
            try {
                handleIsLoading(true);
                const product = await getProductById (match.params.productId);
                setProduct(product);                
            } catch (error) {
                handleError(error.message)
            }finally {
                handleIsLoading(false);
            }
        }
        executeGetProduct();

        return() => {
            console.log('cleanup')
        }

    }, [match.params.productId]);


    if(error && error.status === 404) {
        return <Redirect to='/404' />
    }
    return ( 
        <Layout title="Product Detail"
            error={error}
            isLoading={isLoading}
            {...props}>  
            {product ? <ProductDetail product={product} />: '' }
            <DeleteButton productId={match.params.productId} {...props}/>
            
        </Layout>     
    );
   
}

export default ProductDetailPage;