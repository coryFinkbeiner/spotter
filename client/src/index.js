import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './components/Application';
import SpotifyLogin from './components/SpotifyLogin';
import { DataProvider } from './DataProvider';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));

// Check for the presence of the authorization code
const code = new URLSearchParams(window.location.search).get('code');

root.render(
  <React.StrictMode>
    {code ? (
      <DataProvider code={code}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Application />}>

            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    ) : (
      <SpotifyLogin />
    )}
  </React.StrictMode>
);


    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="about" element={<About />} />
    //       <Route path="vans" element={<Vans />} />
    //       <Route path="vans/:id" element={<VanDetail />} />

    //       <Route path="host" element={<HostLayout />}>
    //         <Route index element={<Dashboard />} />
    //         <Route path="income" element={<Income />} />
    //         <Route path="reviews" element={<Reviews />} />
    //         <Route path="vans" element={<HostVans />} />
    //         <Route path="vans/:id" element={<HostVanDetail />}>
    //           <Route index element={<HostVanInfo />} />
    //           <Route path="pricing" element={<HostVanPricing />} />
    //           <Route path="photos" element={<HostVanPhotos />} />
    //         </Route>
    //       </Route>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>