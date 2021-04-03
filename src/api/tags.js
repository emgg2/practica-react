import client from './client';

const productBaseUrl = '/api/v1/adverts';

export const getTags = () => {
    const url = `${productBaseUrl}/tags`;
    return  client.get(url);
}