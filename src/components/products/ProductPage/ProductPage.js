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
       
        <div onClick= {handleClick} className = "boxProduct" key={product.id}>                   
            <img src={product.picture} alt={product.name}></img>
            <div className={scopedStyles.boxDetail}>
                <div className="productDetail">
                    <p className="productPrice"><b>{product.price}€</b></p>
                    <p className="productName">{product.name}</p>
                </div>
                <p className="productDescription">
                    lorem ipsumaslkdfja sñlfdjka sñdfañsfdj asñfkjasñdlkfjasdfkj
                </p>
                <div className="productDetail">
                    <p className="tag">{product.tags}</p>                            
                    <p className={product.sale ? 'sale' : 'lookingFor'}>{product.sale? 'En venta': 'Se busca'}</p>
                </div>
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