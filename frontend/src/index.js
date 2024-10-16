import React from 'react';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

import ReactDOM from "react-dom/client";
import { GlobalListProvider } from './GlobalListContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <GlobalListProvider>
          <App />
      </GlobalListProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your test, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
