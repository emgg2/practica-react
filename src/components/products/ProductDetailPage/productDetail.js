import './ProductDetailPage.css';
import DeleteButton from '../../shared/DeleteButton';

const ProductDetail = ({product, ...props}) => {
    const tags = product.tags.map(tag => <p className="tag">{tag}</p>);
    return (
        
        <div className = "box">           

             <div className="photo"><img src={`${process.env.REACT_APP_API_BASE_URL}${product.photo}`} alt={product.name} /> </div>
             <div className="productData">
                <p className="productNameDetail">{product.name}</p>
                <p className="productPriceDetail"><b>{product.price}€</b> <span className="comment"><i>impuestos includos</i></span></p>                 
                {tags}<br/>
                <p className={product.sale === true ? 'sale' : 'lookingFor'}>{product.sale === true ? 'En venta': 'Se busca'}</p>
                <hr />
                <DeleteButton productId={product.id} {...props}/>
                
            </div> 
        </div>
    );
       
}

export default ProductDetail ;