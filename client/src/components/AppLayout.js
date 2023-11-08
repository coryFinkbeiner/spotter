import React from 'react';
import { Outlet } from 'react-router-dom';
import Dash from './Dash';
import SessionBar from './SessionBar';
import PlayerBar from './PlayerBar';

function AppLayout({ children }) {

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gridTemplateRows: '7fr 1fr',
        height: '100%',
        backgroundColor: 'darkOrange',
      }}
    >
      <Dash />
      <Outlet />
      <SessionBar />
      <PlayerBar />
    </div>
  );
}

export default AppLayout;