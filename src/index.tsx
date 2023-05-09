import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/dist/output.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { redux_store } from './slices/store';

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);
root.render(
  <BrowserRouter>
  <Provider store={redux_store}>
  <App />
  </Provider>
  </BrowserRouter>
);


