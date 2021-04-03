import client, { configureClient, resetClient } from './client';
import storage from '../components/utils/storage'

export const login = (credentials, savePassword) => {

   
    return client
    .post('/api/auth/login', credentials)
    .then(({accessToken}) =>{
        configureClient({accessToken})
        if(savePassword){
            storage.set('auth', accessToken);

        }
    }
    );
};

export const logout = () => {
    return Promise.resolve().then(() => {
      resetClient();
      storage.remove('auth');
    });
  };

