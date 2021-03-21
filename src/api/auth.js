import client, { configureClient } from './client';

export const login = credentials => {
    return client
    .post('/auth/login', credentials)
    .then(({accessToken}) => configureClient({accessToken}));
};

