import client from './client';

const productBaseUrl = '/api/v1';

export const getProducts = () => {
    const url = `${productBaseUrl}/adverts`;
    return  client.get(url);
}

export const getProductById = (productId) => {
    const url = `${productBaseUrl}/adverts/${productId}`;
    return client.get(url);
}

export const createProduct = product => {
    
    const url = `${productBaseUrl}/adverts`;
    return client.post(url, product);
}

export const createLike = productId => {
    const url = `${productBaseUrl}/adverts/${productId}/likes`;
    return client.post(url);
}

export const deleteLike = likeId => {
    const url = `${productBaseUrl}/likes/${likeId}`;
    return client.delete(url);
}

export const deleteProduct = productId => {
    const url = `${productBaseUrl}/adverts/${productId}`;
    return client.delete(url);
}

export const getTags = () => {
    const url = `${productBaseUrl}/tags`;
    return  client.get(url);
}

export const uploadFile = () =>{}