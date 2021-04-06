import ProductItem from './ProductItem';
import {Link} from 'react-router-dom';

import scopedStyles from './ProductPage.module.css';

const ProductList = ({products, ...props}) => {    

    const items = products.map(product =>{        
        return (
           <Link to={`/product/${product.id}`} key={product.id}>            
           <ProductItem product={product} key={product.id}  />
          </Link>
       )});


    return(             
        <div className={scopedStyles.content}> {items} </div>               

    );

};

export default ProductList;