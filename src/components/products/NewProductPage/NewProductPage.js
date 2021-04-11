import React from 'react';
import Layout from '../../layout/Layout';
import useError from '../../../hooks/useError';
import useIsLoading from '../../../hooks/useError';
import NewProductPageForm from './NewProductPageForm'
import { createProduct } from '../../../api/products';

import './NewProductPage.css';

const NewProductPage = ({  history }) => {
    const [error, handleError] = useError(false);
    const [isLoading, handleIsLoading] = useIsLoading(false);
   


        const handleSubmit = async productData => {
            try 
            {
                handleIsLoading(true);
                const formData = getFormData(productData);
                await createProduct(formData);                
                history.push("/");

            }catch (error) {
                handleError(error.message);      

            }              
        }		
      
		const getFormData = (productData) => {
			let formData = new FormData();
			formData.append('name', productData.name);
			formData.append('price', productData.price);
			formData.append('sale', productData.sale);
			formData.append('tags', productData.tags);
            if(productData.photo !== "") formData.append('photo', productData.photo);
			return formData;
		}

        return ( 
            <Layout 
                onSubmit={handleSubmit} 
                error={error} 
                isLoading={isLoading}
                title='Nuevo producto'
            >                
                <NewProductPageForm onSubmit={handleSubmit}></NewProductPageForm>
            </Layout>         
        );    
}

export default NewProductPage;