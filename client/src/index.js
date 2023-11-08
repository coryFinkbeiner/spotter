import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './Application';
import SpotifyLogin from './components/SpotifyLogin';
import AppLayout from './components/AppLayout';
import Console from './components/Console';
import Dash from './components/Dash';
import PlayerBar from './components/PlayerBar'
import BeatBar from './components/BeatBar';
import { DataProvider } from './DataProvider';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));








// // Check for the presence of the authorization code
// const code = new URLSearchParams(window.location.search).get('code');

// root.render(
//   <React.StrictMode>
//     {code ? (
//       <Application code={code}/>
//     ) : (
//       <SpotifyLogin />
//     )}
//   </React.StrictMode>
// );









root.render(
  <React.StrictMode>

    <Application />

  </React.StrictMode>
);