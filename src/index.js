import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {configureStore} from '@reduxjs/toolkit';
import countactReducer  from "./app/countactSlice";
import { Provider } from 'react-redux';

const store =  configureStore({
  reducer: {
    countact: countactReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
