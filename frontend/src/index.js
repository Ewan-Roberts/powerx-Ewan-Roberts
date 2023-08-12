import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // comment out strict mode as this will only ever be run locally and removes the dev environement double loading of
  // the page
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

reportWebVitals();
