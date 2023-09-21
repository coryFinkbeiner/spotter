import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDataContext } from '../hooks/useDataContext';
import Playlists from './Playlists'
import Albums from './Albums';

function Sidebar() {
  const [radio, setRadio] = useState('playlists');
  const [results, setResults] = useState({}); // remnant?

  const { accessToken, dispatch, user } = useDataContext();


  useEffect(() => {

    (async () => {
      try {
        const response = await axios.get(`http://localhost:3002/listening_history`, {
          params: {
            user_id: user.id,
          }
        });
        console.log('Listening History:', response.data);
      } catch (error) {
        console.error('Error fetching listening history:', error);
      }
    })();



  }, [])




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
          backgroundColor: 'rgb(18, 18, 18)',
        }}
      >
        <div className='s-1-nav'>
          Home
        </div>
        <div className='s-1-nav'
          onClick={() => {
            dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'SearchView' })
          }}
          style={{
            cursor: 'pointer',
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
            style={{
              cursor: 'pointer',
              backgroundColor: radio === 'albums' ? 'white' : 'rgba(255, 255, 255, 0.07)',
              color: radio === 'albums' ? 'black' : 'rgba(255, 255, 255)'
            }}
          >
            Albums
          </div>
          <div
            className='s-2-2-radio'
            onClick={() => setRadio('playlists')}
            style={{
              cursor: 'pointer',
              backgroundColor: radio === 'playlists' ? 'white' : 'rgba(255, 255, 255, 0.07)',
              color: radio === 'playlists' ? 'black' : 'rgba(255, 255, 255)'
            }}
          >
            Playlists
          </div>
        </div>
        <div
          style={{
            overflowY: 'auto',
            zIndex: 1,
            height: '100%',
            scrollbarWidth: 'thin',
            scrollbarColor: 'transparent transparent',
          }}
        >
          {radio === 'albums' && (
            <Albums />
          )}
          {radio === 'playlists' && (
            <Playlists />
          )}

{/*
          {radio === 'history' && (


            <div className='sidebar-render'>
              {playlistData?.items?.map((playlist, index) => (
                <SidePlaylist key={index} playlist={playlist} id={index} />
              ))}
            </div>

          )}
 */}



        </div>
      </div>

    </div>
  );
}

export default Sidebar;

