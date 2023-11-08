import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function SpotifyLayout() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2.1fr'
      }}
    >
      <Sidebar />
      <Outlet />
    </div>
  )
}
