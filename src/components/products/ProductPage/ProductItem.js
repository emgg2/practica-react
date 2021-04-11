import scopedStyles from './ProductPage.module.css';
import './ProductPage.css';
import ImageNotFound from '../../shared/ImageNotFound';


const ProductItem = ({product}) => {
    
    const tags = product.tags.map(tag => <p className="tag" key="product.id">{tag}</p>);

    return (
        <div className = "boxProduct" >  
        {product.photo
            ? <img src={`${process.env.REACT_APP_API_BASE_URL}${product.photo}`} alt={product.name} className="imgSmall"></img>
            : <ImageNotFound name={product.name}/>
        }                 
        
        <div className={scopedStyles.boxDetail} >
            <div className="productDetail" >
                <p className="productPrice"><b>{product.price}€</b></p>
                <p className="productName">{product.name}</p>
            </div>
            <p className="productDescription">
                {product.description}
            </p>
            <div className="productDetail">
                {tags}                   
                <p className={product.sale === true ? 'sale' : 'lookingFor'}>{product.sale === true ? 'En venta': 'Se busca'}</p>
            </div>
        </div>
    </div>
    );
} 

export default ProductItem;