import React from 'react';
import './NewProductPage.css';
import Layout from '../../layout/Layout';
import Input from '../../shared/Input';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import Button from '../../shared/Button'
import NewProductPageForm from './NewProductPageForm'
import { createProduct } from '../../../api/products';
import { Redirect } from 'react-router';


const NewProductPage = ({  history }) => {


   
        const handleSubmit = async productData => {
                try 
                {
                        debugger;
						const formData = getFormData(productData);
                        await createProduct(formData);                
                        history.push("/");

                }catch (error) {

                }finally{

                }                
                
        }
		
      
		const getFormData = (productData) => {
			let formData = new FormData;
			formData.append('name', productData.name);
			formData.append('price', productData.price);
			formData.append('sale', productData.sale);
			formData.append('tags', productData.tags);
			formData.append('photo', productData.photo);
			return formData;
		}

        return ( 
            <Layout title="New Product" onSubmit={handleSubmit} >
                
                <NewProductPageForm onSubmit={handleSubmit}></NewProductPageForm>
            </Layout> 
        
        );
    
}

export default NewProductPage;