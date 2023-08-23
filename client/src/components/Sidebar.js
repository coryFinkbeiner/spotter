import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDataContext } from '../hooks/useDataContext';

import { Container, Row, Col } from 'react-bootstrap';


function Albums({ results, dispatch }) {

  // return <div>Albums not found</div>

  if (!results) {
    return <div>Albums not found</div>;
  }

  return <div>{results.href}</div>

  // return (
  //   <div>
  //     {results?.items?.map((item, i) => {
  //       console.log({item})
  //       return (
  //         <div>{item.added_at}</div>
  //       )
  //     )}
  //   </div>
  // );
}

function Playlists({ results, dispatch }) {
  if (!results) {
    return <div>Playlists not found</div>;
  }

  return (
    <div className='sidebar-render'>
      {results?.items?.map((playlist) => (
        <div className='sidebar-item-container'
          key={playlist.id}
          onClick={() => {
            dispatch({ type: 'VIEW_IN_CONSOLE', payload: playlist })
            dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'PlaylistView' })
          }}
        >
          <img
            src={playlist.images[0]?.url}
            style={{
              borderRadius: '5px',
              margin: '2px'
            }}
          />
          <div
            style={{
              color: 'white',
              marginLeft: '3px',
              padding: '2px'
            }}
          >
            <div
              style={{
                height: '50%',
                fontWeight: 'bold',
              }}
            >
              {playlist.name}

            </div>
            <div
              style={{
                height: '50%'
              }}
            >
              {playlist.owner.display_name}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function Sidebar() {
  const [radio, setRadio] = useState('playlists');
  const [results, setResults] = useState({});

  const { accessToken, dispatch } = useDataContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.spotify.com/v1/me/${radio}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setResults(response.data);
      } catch (error) {
        console.log('Search Error:', error);
      }
    };

    fetchData();
  }, [radio, accessToken]);

  return (

    // Sidebar Container
    <div style={{
      flex: '0 0 240px',
      minWidth: '240px',
      margin: '6px',
      padding: '2px',
      height: '100vh',

      backgroundColor: 'pink',
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

      {/* Render */}
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
        <div className='s-2-3'>
          {radio === 'albums' && (
            <Albums results={results} dispatch={dispatch} />
          )}
          {radio === 'playlists' && (
            <Playlists results={results} dispatch={dispatch} />
          )}
        </div>
      </div>

    </div>
  );


}


export default Sidebar;

// add icons
// thicken font

// refactor Albums and Playlists radios
  // i think it's pretty simple, just add an onClick to the div
    //






//@ focus on spacing first and functionality first, then style to be like spotify.

// Home button
  // placeholder link for now, will open in console

// Search button
  // opens Search in console

// Your Library title
// Songs, Albums, Playlist radios
// (No dropdown for sort-by, or micro-search for withing playlists and such in this iteration)

// renders
  // Albums
    // onClick: open Album in console
    // Album img
    // "Album"
    // Name
  // Playlists
    // onClick: open Playlist in console
    //* (how to handle folders)
    //* (how to handle Liked Songs
        // it has different structure than playlists)
    // Name
    // Creator of playlist
// Infinite Scroll



// SMALL

  // Track
    // Album image
    // Name
    // Plus icon (add to end of queue)
        // ???

// i am realizing now that Spotify does not have any tracks in the sidebar.

// but since my




// * in Spotify, the X in the Your Library radios will render all playlists and albums by last touched, i think you could say

//* MyQueue and Sidebar Track, Playlist and Album objects will be the same, miniaturized versions...
//* i still need to figure out the versions which will be present in Playlist and Album console components...



//* See Search for clickabilities... same clickability, but miniature version.

//XXX A spy could be the counter to bombs. you could have a Track, Album and Artist spy... it fires when you use it, and if you guess the right Track, Album or Artist of the track in any opponent's mine spot, you will destroy their mine and steal their spot.