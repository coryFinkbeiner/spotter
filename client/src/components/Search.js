import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDataContext } from '../hooks/useDataContext';

function TrackList({ tracks, dispatch }) {
  if (!tracks || tracks.length === 0) {
    return <div>Search Tracks</div>;
  }

  return (
    <ul>
      {tracks.map((track) => (
        <li
          key={track.id}
          onClick={() => dispatch({ type: 'ADD_TO_QUEUE', payload: track })}
        >
          <div>{track.name} - {track.artists[0].name}</div>
        </li>
      ))}
    </ul>
  );
}

function ArtistList({ artists }) {
  if (!artists || artists.length === 0) {
    return <div>Search Artists</div>;
  }

  return (
    <ul>
      {artists.map((artist) => (
        <li key={artist.id}>
          <div>{artist.name}</div>
        </li>
      ))}
    </ul>
  );
}

function AlbumList({ albums }) {
  if (!albums || albums.length === 0) {
    return <div>Search Albums</div>;
  }

  return (
    <ul>
      {albums.map((album) => (
        <li key={album.id}>
          <div>{album.name}</div>
        </li>
      ))}
    </ul>
  );
}

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
            value="artist"
            name="search-type"
            checked={searchType === 'artist'}
            onChange={handleRadioChange}
          />
          Artists
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
      </div>
      <button onClick={handleSearch}>Search</button>

      {searchType === 'track' && (
        <TrackList tracks={results?.tracks?.items} dispatch={dispatch} />
      )}

      {searchType === 'artist' && (
        <ArtistList artists={results?.artists?.items} />
      )}

      {searchType === 'album' && (
        <AlbumList albums={results?.albums?.items} />
      )}

      <div>-------------------------------------------</div>
    </div>
  );
}

export default Search;



// need to figure out Artist, Track and Album objects. will they be the same in search area as they are in the Sidebar area?