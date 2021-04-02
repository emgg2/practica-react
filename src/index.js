import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import storage from './components/utils/storage';
import { configureClient } from './api/client';

const accessToken = storage.get('auth');
configureClient({ accessToken });

ReactDOM.render(
  <Router>
    <App isInitiallyLogged={!!accessToken} />
  </Router>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

