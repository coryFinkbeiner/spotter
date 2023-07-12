import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDataContext } from '../hooks/useDataContext';


function Tracks({ results, dispatch }) {
  if (!results) {
    return <div>Tracks not found</div>;
  }

  return (
    <ul>
      {results?.items?.map((item) => (
        <li
          key={item.track.id}
          onClick={() => dispatch({ type: 'ADD_TO_QUEUE', payload: item.track })}
        >
          <div>{item.track.name}</div>
        </li>
      ))}
    </ul>
  );
}

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


function Sidebar() {
  const [radio, setRadio] = useState('tracks');
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

  const handleRadioChange = (event) => {
    setRadio(event.target.value);
  };

  return (
    <div className='sidebar'>
      <div>------------------Sidebar--------------------</div>

      <div>
        <label>
          <input
            type="radio"
            value="tracks"
            checked={radio === 'tracks'}
            onChange={handleRadioChange}
          />
          Tracks
        </label>
        <label>
          <input
            type="radio"
            value="albums"
            checked={radio === 'albums'}
            onChange={handleRadioChange}
          />
          Albums
        </label>
        <label>
          <input
            type="radio"
            value="playlists"
            checked={radio === 'playlists'}
            onChange={handleRadioChange}
          />
          Playlists
        </label>
      </div>
      {radio === 'tracks' && (
        <Tracks results={results} dispatch={dispatch}  />
      )}

      {radio === 'albums' && (
        <Albums results={results} dispatch={dispatch} />
      )}

      {radio === 'playlists' && (
        <Playlists results={results} dispatch={dispatch} />
      )}

      <div>-------------------------------------------</div>
    </div>
  );
}

export default Sidebar;



// See Search for clickabilities... same clickability, but miniature version.