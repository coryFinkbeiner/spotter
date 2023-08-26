import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDataContext } from '../hooks/useDataContext';

function TrackList({ tracks, dispatch }) {
  if (!tracks || tracks.length === 0) {
    return <div>Search Tracks</div>;
  }

  return (
    <div
      style={{
      }}
    >
      {tracks.map((track) => (
        <div
          key={track.id}
          onClick={() => dispatch({ type: 'ADD_TO_QUEUE', payload: track })}
          style={{
          }}
        >
          <div>{track.name} - {track.artists[0].name}</div>
        </div>
      ))}
    </div>
  );
}

function ArtistList({ artists, dispatch }) {
  if (!artists || artists.length === 0) {
    return <div>Search Artists</div>;
  }

  return (
    <ul>
      {artists.map((artist) => (
        <li
          key={artist.id}
          onClick={() => {
            dispatch({ type: 'VIEW_IN_CONSOLE', payload: artist })
            dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'ArtistView' })
          }}
        >
          <div>{artist.name}</div>
        </li>
      ))}
    </ul>
  );
}

function AlbumList({ albums, dispatch }) {
  if (!albums || albums.length === 0) {
    return <div>Search Albums</div>;
  }

  return (
    <ul>
      {albums.map((album) => (
        <li
          key={album.id}
          onClick={() => {
            dispatch({ type: 'VIEW_IN_CONSOLE', payload: album })
            dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'AlbumView' })
          }}
        >
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
    <div
      style={{
      }}
    >
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
        <ArtistList artists={results?.artists?.items} dispatch={dispatch} />
      )}

      {searchType === 'album' && (
        <AlbumList albums={results?.albums?.items} dispatch={dispatch} />
      )}

    </div>
  );
}

export default Search;



// onClick for Album and Artist opens up the Album view in the console, which conditionally renders in the Console element instead of Search


// * onRightClick for ___ opens up advanced options

  // Track
    // Play Next
    // * add to specific place in the queue

  // Album
    // Add Album to End of Queue
    // Play Album Next
    // Thread
      // * input gap and starting place

  // Artist
    // not sure, and probably won't be included in first MVP



// Artist could have
  // img of artist
    // onClick opens up Console.Artist
  // top 5 liked songs or top 5 most popular
    // with same onClick and onRightClick as Track
  // top 4 Liked albums or top 4 albums
      // the album would just be the album art, with the same onClick and onRightClick functionality as the regular Album object

// Album could have
  // Album art, title, name of Artist
    // art and title would have Album click functionality
    // name of Artist would have Artist click functionality
  // 3-5 liked songs from the album, or first 3 tracks
    // with song clickability

// there could be a way to expand the Artist and Album objects, not include the extra stuff unless you expand


