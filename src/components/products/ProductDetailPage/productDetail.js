import './ProductDetailPage.css';

const ProductDetail = ({product}) => {
    return (
        
        <div className = "box">           
             <div className="photo"><img src={`${process.env.REACT_APP_API_BASE_URL}${product.photo}`} alt={product.name} /> </div>
             <div>
                 
                <p>{product.name}</p>
                <p className="tag">{product.tags}</p>
                
                <p><b>{product.price}€</b></p>     
                <p>{product.sale}</p>
            </div> 
        </div>
    );
       
}

export default ProductDetail ;