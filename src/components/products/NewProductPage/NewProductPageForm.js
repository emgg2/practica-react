import React from 'react';
import './NewProductPage.css';
import Input from '../../shared/Input';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import Button from '../../shared/Button';
import File from '../../shared/File';
import { getTags } from '../../../api/tags';
import { createProduct } from '../../../api/products';


const NewProductPage = ({ onSubmit }) => {
        const [productData, setProductData] = React.useState ({
                name: '',
                price:'',
                sale: '',
                tags: [],
                photo: ''
        });
        const [tagsOptions, setTagsOptions] = React.useState({
                value: '',
                label: '',
                name:'tags'
        });

        const optionsItems = [
                { value: true, label: 'En Venta' , name:'sale'},
                { value: false, label: 'Se Busca', name:'sale' },
              ];

         React.useEffect (() => {
         async function getTagsList() {
                 try{
                 		setTagsOptions(getTagsValue(await getTags()));
                 }catch (error) {
                 } finally {
                         }
                 }
                 getTagsList();
         }, []);

		const getTagsValue = tags => {
			const tagsValues = tags.map(tag =>{ 
				const tagLine = {value: tag,label: tag,name: 'tags'};
				return tagLine; 
			});			
			return tagsValues;
	}
		
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

        const handleChangeSelect = event => {  
                setProductData (oldProductData => ({
                        ...oldProductData,
                        [event.name]: event.value,
                }))
        }

        const handleChangeMultiSelect = event => {                
                let tags = [];
                let nameEle = "";

                event.forEach(element => {
                        tags.push(element.value);                   
                        nameEle = element.name;
                });              
                
                console.log(tags);
                setProductData (oldProductData => ({
                        ...oldProductData,
                        [nameEle]: tags,
                }))
        }
		  const handleFile = e => {
			  console.log(e);
				 setProductData(oldProductData => ({
				 	...oldProductData, 
				 	['photo']: e
				 }))  			  
		  }

		  const handleError = ({error}) => alert(error);

        const animatedComponents = makeAnimated();
        const {name, price} = productData;

        return (


                <div className="columns">
                <div className="column is-two-thirds">
                <h1 className="title">New Product</h1>
                <form onSubmit={handleSubmit}>

                <Input
                  type="text"
                  name="name"
                  label="Descripcion"
                  className="loginForm-field"
                  value={name}
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

                <Select
                        name="sale"
                        options={optionsItems}
                        onChange={handleChangeSelect}
                />
                <Select
                   closeMenuOnSelect={false}
                   components={animatedComponents}
                   defaultValue={[tagsOptions[1],tagsOptions[1]]}
                   isMulti
                   name="tags"
                   onChange={handleChangeMultiSelect}
                   options={tagsOptions}
                />


               <File 
					 	name="photo" 
						onFileSelectSuccess={handleFile} 
						onFileSelectError={handleError}
					/>

                <Button
                type="submit"
                className="loginForm-submit"
                variant="primary"
                disabled={!name || !price}

                >
                Publicar
                </Button>


                </form>
            </div>
        </div>



        );

}

export default NewProductPage;