import React from 'react';
import { Outlet } from 'react-router-dom';


export default function SpotifyLayout() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2.23fr'
      }}
    >
      <Outlet />
    </div>
  )
}
