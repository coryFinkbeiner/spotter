import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'
import { useData } from '../DataProvider';


export default function SpotifyApp() {


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