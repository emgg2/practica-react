import ProductItem from './ProductItem';
import {Link} from 'react-router-dom';
import Layout from '../../layout/Layout';
import scopedStyles from './ProductPage.module.css';

const ProductList = ({products, ...props}) => {    

    const items = products.map(product =>{        
        return (
           <Link to={`/product/${product.id}`} key={product.id}>            
           <ProductItem product={product} key={product.id}  />
          </Link>
       )});


    return(
    <Layout title="Product List" { ...props } >            
        <div className={scopedStyles.content}> {items} </div>                
    </Layout> 
    );

};

export default ProductList;