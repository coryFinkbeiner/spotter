import React, { useEffect, useState } from 'react';
import { collectionsBox } from '../styles';
import { Outlet, NavLink } from 'react-router-dom';

function Sidebar() {

  return (
    <div
      style={{
        height: '100%',
        display: 'grid',
        gridTemplateRows: '1fr 2.4fr',
        minWidth: '159px',
        backgroundColor: 'yellow'
      }}
    >
      <div
        style={{
          backgroundColor: 'green',
          color: 'white'
        }}
      >
        {/* <nav>
          <NavLink
              to="/spotify/sidebar/albums"
              // style={({isActive}) => isActive ? activeStyles : null}
          >
              Albums
          </NavLink>
          <NavLink
              to="/spotify/sidebar/playlists"
              // style={({isActive}) => isActive ? activeStyles : null}
          >
              Playlists
          </NavLink>

        </nav> */}

      </div>

      <div
        style={{
          position: 'relative',
          padding: '2px',
          background: 'lightRed',
          height: '100%',
        }}
      >
        <div style={collectionsBox}>
          {/* <Outlet /> */}
        </div>
      </div>
    </div>
  )
}

export default Sidebar






