
import React from 'react';
import { Outlet } from 'react-router-dom';


function AppLayout({ children }) {


  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gridTemplateRows: '7fr 1fr',
        height: '100vh',
        // backgroundColor: 'black',
      }}
    >
      <Outlet />
    </div>
  );
}

export default AppLayout;