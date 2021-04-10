import scopedStyles from './ProductPage.module.css';
import './ProductPage.css';


const ProductItem = ({product}) => {
    
    const tags = product.tags.map(tag => <p className="tag">{tag}</p>);

    return (
        <div className = "boxProduct" key={product.id}>                   
        <img src={`${process.env.REACT_APP_API_BASE_URL}${product.photo}`} alt={product.name}></img>
        <div className={scopedStyles.boxDetail}>
            <div className="productDetail">
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