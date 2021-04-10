import './ProductDetailPage.css';

const ProductDetail = ({product}) => {
    const tags = product.tags.map(tag => <p className="tag">{tag}</p>);
    return (
        
        <div className = "box">           

             <div className="photo"><img src={`${process.env.REACT_APP_API_BASE_URL}${product.photo}`} alt={product.name} /> </div>
             <div className="productData">
             <p className="productName">{product.name}</p>
             <p className="productPriceDetail"><b>{product.price}€</b> <span className="comment"><i>impuestos includos</i></span></p>                 
             {tags}
             <p className={product.sale === true ? 'sale' : 'lookingFor'}>{product.sale === true ? 'En venta': 'Se busca'}</p>

                
            </div> 
        </div>
    );
       
}

export default ProductDetail ;