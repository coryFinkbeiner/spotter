
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { DataProvider } from './DataContext';

// import Application from './components/Application';

// import SpotifyLogin from './components/SpotifyLogin';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <DataProvider>

//       {/* <App /> */}


//       {/* <Application /> */}


//       <SpotifyLogin />


//     </DataProvider>
//   </React.StrictMode>
// );



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Application from './components/Application';
import SpotifyLogin from './components/SpotifyLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Check for the presence of the authorization code
const code = new URLSearchParams(window.location.search).get("code");

root.render(
  <React.StrictMode>

      {code ? (
        <Application code={code} />
      ) : (
        <SpotifyLogin />
      )}

  </React.StrictMode>
);







