
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDataContext } from '../hooks/useDataContext';

function Search() {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('track');
  const [results, setResults] = useState({});

  const { accessToken, dispatch } = useDataContext();

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://api.spotify.com/v1/search', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          q: query,
          type: searchType,
        },
      });
      setResults(response.data);
    } catch (error) {
      console.log('Search Error:', error);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleRadioChange = (event) => {
    setSearchType(event.target.value);
  };

  return (
    <div>
      <div>------------------SEARCH--------------------</div>
      <input type="text" value={query} onChange={handleChange} />
      <div>
        <label>
          <input
            type="radio"
            value="track"
            name="search-type"
            checked={searchType === 'track'}
            onChange={handleRadioChange}
          />
          Songs
        </label>
        <label>
          <input
            type="radio"
            value="album"
            name="search-type"
            checked={searchType === 'album'}
            onChange={handleRadioChange}
          />
          Albums
        </label>
        <label>
          <input
            type="radio"
            value="artist"
            name="search-type"
            checked={searchType === 'artist'}
            onChange={handleRadioChange}
          />
          Artists
        </label>
      </div>
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results?.tracks?.items.map((track) => {
          return (
            <li
              key={track.id}
              onClick={() => dispatch({ type: 'ADD_TO_QUEUE', payload: track })}
            >
              <div>
                {track.name} - {track.artists[0].name}
              </div>
            </li>
          );
        })}
      </ul>
      <div>-------------------------------------------</div>
    </div>
  );
}

export default Search;
