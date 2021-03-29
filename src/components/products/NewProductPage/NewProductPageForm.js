import React from 'react';
import './NewProductPage.css';
import Input from '../../shared/Input';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import Button from '../../shared/Button'

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
            
                
                <div class="columns">
                <div class="column is-two-thirds">
                <h1 class="title">New Product</h1>
                <form>
        
                <Input
                  type="text"
                  name="description"
                  label="Descripcion"
                  className="loginForm-field"            
                  value={description}
                  onChange={handleChange}
                />

                  <Input
                  type="text"
                  name="price"
                  label="Precio"
                  className="loginForm-field"            
                  value={price}
                  onChange={handleChange}
                />              
                            
                <Select options={optionsItems} />
                <Select 
                   closeMenuOnSelect={false}
                   components={animatedComponents}
                   defaultValue={[tagsOptions[1],tagsOptions[1]]}
                   isMulti
                   options={tagsOptions}
                />

                 
                    
                      <Button
                        type="submit"
                        className="loginForm-submit"
                        variant="primary"           
                        disabled={isLoading || !description || !price}
                        >
                        Publicar
                        </Button>                   
                    
                </form>
            </div>
        </div>
            
        
        
        );
    
}

export default NewProductPage;