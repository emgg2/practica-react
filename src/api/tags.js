import client from './client';

const productBaseUrl = '/api';

export const getTags = () => {
    const url = `${productBaseUrl}/tags`;
    return  client.get(url);
}