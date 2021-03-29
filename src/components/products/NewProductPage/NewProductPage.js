import React from 'react';
import './NewProductPage.css';
import Layout from '../../layout/Layout';
import Input from '../../shared/Input';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import Button from '../../shared/Button'
import NewProductPageForm from './NewProductPageForm'

const NewProductPage = ({ onSubmit, isLoading }) => {
        const [productData, setProductData] = React.useState ({
                description: '',
                price:'',
                status: '',
                tags: [],
                file: ''
        });


    
        const optionsItems = [
                { value: true, label: 'En Venta' },
                { value: false, label: 'Se Busca' },                
              ];
        const tagsOptions = [
                { value: 'lifestyle', label: 'Lifestyle' },
                { value: 'mobile', label: 'mobile' },
        ];
        
        const handleSubmit = event => {
                event.preventDefault();
                onSubmit(productData);
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
                
                <NewProductPageForm></NewProductPageForm>
            </Layout> 
        
        );
    
}

export default NewProductPage;