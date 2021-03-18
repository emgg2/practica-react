import React from 'react';
const products =[{"name":"Bici","price":"150","picture":"http://127.0.0.1:8000/file-1614015137233.jpeg","sale":"true","tags":["mobile"],"userId":9,"updatedAt":"2021-02-22T17:32:17.254Z","id":1},
{"name":"Rain Boots","price":"25","picture":"http://127.0.0.1:8000/file-1614015182266.jpeg","sale":"false","tags":["lifestyle"],"userId":9,"updatedAt":"2021-02-22T17:33:02.287Z","id":3}];

const ProductPage = () => {
    const items = products.map(product => (
    <div class = "box">       
        <a href="./edit-product.html?id={product.id}" tag="Editar {product.name}">
        <img src="{product.picture}" alt="{product.name}"></img>
        <div>
            <p class="tag">{product.tags}</p>
            <p>{product.name}</p>
            <p><b>{product.price}€</b></p>     
            <p class="{product.classSale}">{product.sale}</p>
        </div></a>
    </div>
    ));
    return (
        items
    );
}

export default ProductPage;