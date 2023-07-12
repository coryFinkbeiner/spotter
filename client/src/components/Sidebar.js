import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDataContext } from '../hooks/useDataContext';


function Tracks({ results }) {
  if (!results) {
    return <div>Tracks not found</div>;
  }

  return (
    <ul>
      {results?.items?.map((item) => (
        <li key={item.track.id}>
          <div>{item.track.name}</div>
        </li>
      ))}
    </ul>
  );
}

function Albums({ results }) {

  // return <div>Albums not found</div>

  if (!results) {
    return <div>Albums not found</div>;
  }

  return (
    <ul>
      {results?.items?.map((item) => (
        <li key={item.album.id}>
          <div>{item.album.name}</div>
        </li>
      ))}
    </ul>
  );
}

function Playlists({ results }) {
  if (!results) {
    return <div>Playlists not found</div>;
  }

  return (
    <ul>
      {results?.items?.map((item) => (
        <li key={item.id}>
          <div>{item.name}</div>
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
    <div>
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
        <Tracks results={results}  />
      )}

      {radio === 'albums' && (
        <Albums results={results} />
      )}

      {radio === 'playlists' && (
        <Playlists results={results} />
      )}

      <div>-------------------------------------------</div>
    </div>
  );
}

export default Sidebar;



// See Search for clickabilities... same clickability, but miniature version.