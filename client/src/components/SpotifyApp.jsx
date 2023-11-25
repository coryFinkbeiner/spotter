import React from 'react';
import {
  Outlet,
  useLoaderData,
} from 'react-router-dom';
import Sidebar from './Sidebar'

export default function SpotifyApp() {

  const myLibrary  = useLoaderData();

  console.log({myLibrary})

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