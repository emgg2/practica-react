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

export const createProduct = product => {
    const url = `${productBaseUrl}/products`;
    return client.post(url, product);
}

export const createLike = productId => {
    const url = `${productBaseUrl}/products/${productId}/likes`;
    return client.post(url);
}

export const deleteLike = likeId => {
    const url = `${productBaseUrl}/likes/${likeId}`;
    return client.delete(url);
}

export const deleteProduct = productId => {
    const url = `${productBaseUrl}/products/${productId}`;
    return client.delete(url);
}
