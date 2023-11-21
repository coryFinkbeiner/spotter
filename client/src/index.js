import React from 'react';
import Application from './Application';
import SpotifyLogin from './components/SpotifyLogin';
import { DataProvider } from './DataProvider';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const code = new URLSearchParams(window.location.search).get('code');

root.render(
  <React.StrictMode>
    {code ? (
      <DataProvider code={code}>
        <Application />
      </DataProvider>
    ) : (
      <SpotifyLogin />
    )}
  </React.StrictMode>
);