import React from 'react';
import {
  Outlet,
  useLoaderData,

} from 'react-router-dom';
import Sidebar from './Sidebar'
import useSpotifyAPI from '../useSpotifyAPI';


export function loader() {
  return 'test'
}


export default function SpotifyApp() {

  // Albums and Playlists

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2.23fr',
        backgroundColor: 'lightBlue',
      }}
    >
      <Sidebar />
      <Outlet />
    </div>
  )
}