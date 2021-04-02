import React from 'react';
import './ProductDetailPage.css';
import Layout from '../../layout/Layout';
import { getProductById } from '../../../api/products';
import { Redirect } from 'react-router';

class ProductDetailPage extends React.Component  {
    constructor(){
        super();
        this.state = {
            product:null,
            error:null
        }
    }

    componentDidMount(){
        const {match} = this.props;        
        getProductById(match.params.productId).then(product => this.setState({product})).catch(error => this.setState({error}));   
    }

    render() {
        const {product, error} = this.state;
        if(error && error.status === 404) {
            return <Redirect to='/404' />
        }
    return ( 

        <Layout title="Product Detail" >
            
                <div > {JSON.stringify(product)} </div>
        
        </Layout> 
    
    );
    }
}

export default ProductDetailPage;