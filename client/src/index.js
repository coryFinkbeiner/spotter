import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataProvider } from './DataContext';

import Layout from './components/Layout';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>

      {/* <App /> */}


      <Layout />



    </DataProvider>
  </React.StrictMode>
);