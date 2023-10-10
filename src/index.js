import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './redux/store';

import App from './component/App';
import './index.css';

import GlobalStyle from './GlobalStyle';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/car-sharing">
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
