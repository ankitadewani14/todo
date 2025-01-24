import React from 'react';
import ReactDOM from 'react-dom/client';  // Importing from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';

// Create root with the new method
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
