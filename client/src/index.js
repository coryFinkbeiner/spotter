import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataProvider } from './DataContext';

import Application from './components/Application';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>

      {/* <App /> */}


      <Application />



    </DataProvider>
  </React.StrictMode>
);