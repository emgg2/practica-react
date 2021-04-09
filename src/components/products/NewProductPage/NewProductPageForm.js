import React from 'react';

import './NewProductPage.css';

import Input from '../../shared/Input';
import Button from '../../shared/Button';
import File from '../../shared/File';
import SelectSale from '../../shared/SelectSale';
import MultiSelectTags from '../../shared/MultiSelectTags';




const NewProductPage = ({ onSubmit }) => {
	
	const [productData, setProductData] = React.useState ({
			name: '',
			price:'',
			sale: '',
			tags: [],
			photo: ''
	});

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
						value={price}
						onChange={handleChange}
					/>

					<SelectSale                 
						onChange={handleChangeSelect}
						label="Estado"
					/>

					<MultiSelectTags
						onChange={handleChangeMultiSelect}
						label="Tags"
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