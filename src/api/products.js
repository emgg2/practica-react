import client from './client';

const productBaseUrl = '/api';

export const getProducts = () => {
    const url = `${productBaseUrl}/productsss`;
    return  client.get(url);
}

