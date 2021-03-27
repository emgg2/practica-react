import React from 'react';
import { getProducts } from '../../../api/products';
import scopedStyles from './ProductPage.module.css';
import './ProductPage.css';
import Layout from '../../layout/Layout';
import Spinner from '../../shared/Spinner';

const ProductPage = ({ isLoading, error, isLogged, onLogout, onError, onLoading, ...props }) => {
    
    const [products, setProducts] = React.useState([]);
 
  
    React.useEffect(() => {
        async function getProductList () {
        try {            
           // onLoading(true);                       
            setProducts( await getProducts());            
        } catch (error) {        
           // onError(error);            
        }finally
        {            
         //   onLoading(false);
        }
    }
    getProductList();
        
    },[]);

    const handleClick = () =>  {
        console.log('Construyendo un enlace al detalle...');                
    }
    

    const items = products.map(product =>{
        
     return (
       
        <div onClick= {handleClick} className = "boxProduct" key={product.id}>                   
            <img src={product.picture} alt={product.name}></img>
            <div className={scopedStyles.boxDetail}>
                <div className="productDetail">
                    <p className="productPrice"><b>{product.price}€</b></p>
                    <p className="productName">{product.name}</p>
                </div>
                <p className="productDescription">
                    {product.description}
                </p>
                <div className="productDetail">
                    <p className="tag">{product.tags}</p>                            
                    <p className={product.sale === true ? 'sale' : 'lookingFor'}>{product.sale === true ? 'En venta': 'Se busca'}</p>
                </div>
            </div>
        </div>
       
    )});

    return (
        <Layout title="Product List" isLoading={isLoading} error={error} onLogout={onLogout} { ...props } >            
                <div className={scopedStyles.content}> {items} </div>
                
        
        </Layout> 
    
    );
}

export default ProductPage;