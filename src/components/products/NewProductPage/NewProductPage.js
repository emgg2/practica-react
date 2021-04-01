import React from 'react';
import './NewProductPage.css';
import Layout from '../../layout/Layout';
import Input from '../../shared/Input';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import Button from '../../shared/Button'
import NewProductPageForm from './NewProductPageForm'
import { createProduct } from '../../../api/products';


const NewProductPage = ({ onSubmit, isLoading }) => {
        const [productData, setProductData] = React.useState ({
                description: '',
                price:'',
                status: '',
                tags: [],
                file: ''
        });

   
        const handleSubmit = async productData => {
                try 
                {
                        await createProduct(productData);

                }catch (error) {

                }finally{

                }                
                
        }

        const handleChange = event => {
                setProductData (oldProductData => ({
                        ...oldProductData,
                        [event.target.name]: event.target.value,
                }))
        }
        const animatedComponents = makeAnimated();

        const {description, price} = productData;

        return ( 
            <Layout title="New Product" onSubmit={handleSubmit}>
                
                <NewProductPageForm onSubmit={handleSubmit}></NewProductPageForm>
            </Layout> 
        
        );
    
}

export default NewProductPage;