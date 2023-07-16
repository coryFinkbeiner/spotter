import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDataContext } from '../hooks/useDataContext';


// function Tracks({ results, dispatch }) {
//   if (!results) {
//     return <div>Tracks not found</div>;
//   }

//   return (
//     <ul>
//       {results?.items?.map((item) => (
//         <li
//           key={item.track.id}
//           onClick={() => dispatch({ type: 'ADD_TO_QUEUE', payload: item.track })}
//         >
//           <div>{item.track.name}</div>
//         </li>
//       ))}
//     </ul>
//   );
// }

function Albums({ results, dispatch }) {

  return <div>Albums not found</div>



  // if (!results) {
  //   return <div>Albums not found</div>;
  // }

  // return (
  //   <ul>
  //     {results?.items?.map((item) => (
  //       <li
  //         key={item.album.id}
  //         onClick={() => {
  //           dispatch({ type: 'VIEW_IN_CONSOLE', payload: item.album })
  //           dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'AlbumView' })
  //         }}
  //       >
  //         <div>{item.album.name}</div>
  //       </li>
  //     ))}
  //   </ul>
  // );




}

function Playlists({ results, dispatch }) {
  if (!results) {
    return <div>Playlists not found</div>;
  }

  return (
    <ul>
      {results?.items?.map((playlist) => (
        <li
          key={playlist.id}
          onClick={() => {
            dispatch({ type: 'VIEW_IN_CONSOLE', payload: playlist })
            dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'PlaylistView' })
          }}
        >
          <div>{playlist.name}</div>
        </li>
      ))}
    </ul>
  );
}


// function Sidebar() {
//   const [radio, setRadio] = useState('albums');
//   const [results, setResults] = useState({});

//   const { accessToken, dispatch } = useDataContext();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`https://api.spotify.com/v1/me/${radio}`, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         setResults(response.data);
//       } catch (error) {
//         console.log('Search Error:', error);
//       }
//     };

//     fetchData();
//   }, [radio, accessToken]);

//   const handleRadioChange = (event) => {
//     setRadio(event.target.value);
//   };

//   return (
//     <div className='sidebar'>
//       <div className='sidebar-1'>
//         <div className='s-1-nav'>
//           Home
//         </div>
//         <div className='s-1-nav'>
//           Search
//         </div>

//       </div>

//       <div className='sidebar-2'>
//         <div className='s-2-1'>
//           Your Library
//         </div>
//         <label>
//           <input
//             type="radio"
//             value="albums"
//             checked={radio === 'albums'}
//             onChange={handleRadioChange}
//           />
//           Albums
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="playlists"
//             checked={radio === 'playlists'}
//             onChange={handleRadioChange}
//           />
//           Playlists
//         </label>
//       </div>

//       {radio === 'albums' && (
//         <Albums results={results} dispatch={dispatch} />
//       )}

//       {radio === 'playlists' && (
//         <Playlists results={results} dispatch={dispatch} />
//       )}
//     </div>
//   );
// }













function Sidebar() {
  const [radio, setRadio] = useState('albums');
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
    <div className='sidebar'>
      <div className='sidebar-1'>
        <div className='s-1-nav'>
          Home
        </div>
        <div className='s-1-nav'>
          Search
        </div>

      </div>

      <div className='sidebar-2'>
        <div className='s-2-1'>
          Your Library
        </div>


        <div className='s-2-2'>
          <div
            onClick={() => setRadio('albums')}
          >
            Albums
          </div>
          <div
            onClick={() => setRadio('playlists')}
          >
            Playlists
          </div>
        </div>

      </div>

      {radio === 'albums' && (
        <Albums results={results} dispatch={dispatch} />
      )}

      {radio === 'playlists' && (
        <Playlists results={results} dispatch={dispatch} />
      )}
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