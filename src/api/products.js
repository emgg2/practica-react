import client from './client';

const productBaseUrl = '/api';

export const getProducts = () => {
    const url = `${productBaseUrl}/products`;
    return  client.get(url);
}

export const getProductById = (productId) => {
    const url = `${productBaseUrl}/products/${productId}`;
    return client.get(url);
}

