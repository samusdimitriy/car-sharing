import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';

import { store } from 'redux/store';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/car-sharing">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
