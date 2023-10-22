import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Application from './components/Application';
import SpotifyLogin from './components/SpotifyLogin';
import { DataProvider } from './DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Check for the presence of the authorization code
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