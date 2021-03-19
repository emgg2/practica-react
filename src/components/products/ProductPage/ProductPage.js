import React from 'react';
import { getProducts } from '../../../api/products';
import scopedStyles from './ProductPage.module.css';
import './ProductPage.css';
import Layout from '../../layout/Layout';


console.log(scopedStyles);

const ProductPage = () => {

    const [products, setProducts] = React.useState([]);
    
    React.useEffect(() => {
        getProducts().then(setProducts);
    },[]);

    const handleClick = () =>  {
        console.log('Construyendo un enlace al detalle...');                
    }

    const items = products.map(product => (
       
        <div onClick= {handleClick} className = "box" key={product.id}>                   
            <img src={product.picture} alt={product.name}></img>
            <div>
                <p className="tag">{product.tags}</p>
                <p>{product.name}</p>
                <p><b>{product.price}€</b></p>     
                <p className={product.classSale}>{product.sale}</p>
            </div>
        </div>
       
    ));

    return ( 
        <Layout title="Product List">
            
                <div className={scopedStyles.content}> {items} </div>
        
        </Layout> 
    
    );
}

export default ProductPage;