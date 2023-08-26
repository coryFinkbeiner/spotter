import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDataContext } from '../hooks/useDataContext';
import Playlists from './Playlists'
import Albums from './Albums';

function Sidebar() {
  const [radio, setRadio] = useState('playlists');
  const [results, setResults] = useState({});

  const { accessToken, dispatch } = useDataContext();

  return (

    // Sidebar Container
    <div style={{
      flex: '0 0 240px',
      minWidth: '240px',
      margin: '6px',
      padding: '2px',
      height: '87vh',
    }}>

      {/* Navigation Bar */}
      <div
        style={{
          height: '15%',
          margin: '2px',
          padding: '2px',
          borderRadius: '8px',
          color: 'rgb(179, 179, 179)',
          paddingBottom: '8px',
          paddingLeft: '12px',
          paddingRight: '12px',
          paddingTop: '8px',
          borderColor: 'rgb(179, 179, 179)',
          backgroundColor: 'rgb(18, 18, 18)',
        }}
      >
        <div className='s-1-nav'>
          Home
        </div>
        <div className='s-1-nav'
          onClick={() => {
            // dispatch({ type: 'VIEW_IN_CONSOLE', payload: album })
            dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'SearchView' })
          }}
        >
          Search
        </div>

      </div>

      {/* Bottom section */}
      <div
        style={{
          backgroundColor: 'rgb(18, 18, 18)',
          height: '85%',
          margin: '2px',
          marginTop: '8px',
          borderRadius: '8px',
          color: 'rgb(179, 179, 179)',
          paddingBottom: '8px',
          paddingLeft: '12px',
          paddingRight: '12px',
          paddingTop: '8px',
        }}
      >
        <div className='s-2-1'>
          Your Library
        </div>
        <div className='s-2-2'>
          <div className='s-2-2-radio'
            onClick={() => setRadio('albums')}
          >
            Albums
          </div>
          <div
            className='s-2-2-radio'
            onClick={() => setRadio('playlists')}
          >
            Playlists
          </div>
        </div>
        <div className='s-2-3'
          style={{
            overflowY: 'auto',
            maxHeight: '460px'
          }}
        >
          {radio === 'albums' && (
            <Albums />
          )}
          {radio === 'playlists' && (
            <Playlists />
          )}
        </div>
      </div>

    </div>
  );
}

export default Sidebar;

