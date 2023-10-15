import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataProvider } from './DataContext';


import FakeApp from './components/FakeApp';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>

      {/* <App /> */}


      <FakeApp />



    </DataProvider>
  </React.StrictMode>
);