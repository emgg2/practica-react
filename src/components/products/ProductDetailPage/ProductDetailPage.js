import React , {useState, useEffect} from 'react';
import './ProductDetailPage.css';
import Layout from '../../layout/Layout';
import { getProductById } from '../../../api/products';
import { Redirect } from 'react-router';
import DeleteButton from '../../shared/DeleteButton';

const ProductDetailPage = ({match, ...props}) => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(()=> {
        getProductById(match.params.productId)
            .then(product => setProduct(product))
            .catch(error => setError(error))
        return() => {
            console.log('cleanup')
        }

    }, [match.params.productId]);


    if(error && error.status === 404) {
        return <Redirect to='/404' />
    }
    return ( 
        <Layout title="Product Detail" {...props}>  
            <DeleteButton productId={match.params.productId} {...props}/>
            <div > {JSON.stringify(product)} </div>        
        </Layout>     
    );
   
}

export default ProductDetailPage;