import React from 'react';
import './NewProductPage.css';
import Input from '../../shared/Input';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import Button from '../../shared/Button';
import File from '../../shared/File';
import { getTags } from '../../../api/tags';
import { createProduct } from '../../../api/products';


const NewProductPage = ({ onSubmit, isLoading }) => {
        const [productData, setProductData] = React.useState ({
                description: '',
                price:'',
                status: '',
                tags: [],
                file: ''
        });
        const [tagsOptions, setTagsOptions] = React.useState({
                value: '',
                label: '',
                name:'tags'
        });

        const optionsItems = [
                { value: true, label: 'En Venta' , name:'status'},
                { value: false, label: 'Se Busca', name:'status' },
              ];

         React.useEffect (() => {
         async function getTagsList() {
                 try{

                 setTagsOptions(await getTags());

                 }catch (error) {
                 } finally {
                         }
                 }
                 getTagsList();
         }, []);

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

        const animatedComponents = makeAnimated();

        const {description, price} = productData;

        return (


                <div className="columns">
                <div className="column is-two-thirds">
                <h1 className="title">New Product</h1>
                <form onSubmit={handleSubmit}>

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

                <Select
                        name="estado"
                        options={optionsItems}
                        onChange={handleChangeSelect} />
                <Select
                   closeMenuOnSelect={false}
                   components={animatedComponents}
                   defaultValue={[tagsOptions[1],tagsOptions[1]]}
                   isMulti
                   name="tags"
                   onChange={handleChangeMultiSelect}
                   options={tagsOptions}
                />

                <File name="picture" onChange={handleChange}/>

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