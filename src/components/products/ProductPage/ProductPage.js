import React from 'react';

import { getProducts } from '../../../api/products'

const ProductPage = () => {

    const [products, setProducts] = React.useState([]);
    const items = products.map(product => (
    <div class = "box" key={product.id}>       
        <a href="./edit-product.html?id={product.id}" tag="Editar {product.name}">
        <img src="{product.picture}" alt="{product.name}"></img>
        <div>
            <p className="tag">{product.tags}</p>
            <p>{product.name}</p>
            <p><b>{product.price}€</b></p>     
            <p className="{product.classSale}">{product.sale}</p>
        </div></a>
    </div>
    ));



    React.useEffect(() => {
        getProducts().then(response => {setProducts(response.data)});
    },[]);

    return (
        items
    );
}

export default ProductPage;