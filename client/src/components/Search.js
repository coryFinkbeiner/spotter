import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDataContext } from '../hooks/useDataContext';
import Track from './Track'

function Tracks({ results }) {



  return (
    <div
      style={{
      }}
    >
      {results.tracks.items.map((item) => (
        <div>{item.id}</div>
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
  const [radio, setRadio] = useState('track');
  const [results, setResults] = useState({});
  const { accessToken, dispatch } = useDataContext();
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/search', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            q: query,
            type: radio,
          },
        });
        setResults(response.data);
      } catch (error) {
        console.log('Search Error:', error);
      }
    };
    fetchData()
  }, [count, radio]);


  const handleChange = (event) => {
    setQuery(event.target.value);
  };


  return (

    <div
      style={{
        backgroundColor: 'lightblue',
        height: '100%',
        padding: '4px, 4px, 4px, 4px',
        marginTop: '13px'
      }}
    >

      {/* top container */}
      <div
        style={{
          // backgroundColor: 'rgb(18, 18, 18)'
          backgroundColor: 'white',
          margin: '6px',
          padding: '10px, 10px, 10px, 10px',
          height: '15%',
          borderRadius: '8px',
        }}
      >

        {/* Search Bar */}
        <div
          style={{
            height: '64px',
            margin: '4px, 4px, 4px, 4px',
            padding: '6px'
          }}
        >
          <div
            style={{
              backgroundColor: 'pink',
              borderRadius: '30px',
              width: '355px',
              height: '100%',
              display: 'flex',
              flexDirection: 'row',
              padding: '4px, 4px, 4px, 4px',
              border: '2px solid white',
            }}
          >
            <div
              style={{
                width: '42px'
              }}

            >
              M
            </div>
            <input
              type="text"
              value={query}
              onChange={handleChange}
              style={{
                background: 'transparent',
                width: '266px'
              }}
            />
            <div
              style={{
                width: '42px'
              }}
              onClick={() => setCount(count + 1)}
            >
              S
            </div>
          </div>

          {/* Radio buttons container */}
          <div
            style={{
              // backgroundColor: 'red',
              height: '100%',
              width: '100%',
              margin: '0px 0px 0px 0px',
              padding: '7px 4px 4px 4px',
              display: 'flex',
              flex: 'row'


            }}
          >

            <div
              style={{
                backgroundColor: 'grey',
                height: '76%',
                width: '60px',
                padding: '0px 0px 0px 0px',
                margin: '0px 8px 7px 0px',
                borderRadius: '36px',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '14px',
                alignItems: 'center',
              }}
              onClick={() => setRadio('artist')}
            >
              Artists
            </div>

            <div
              style={{
                backgroundColor: 'grey',
                height: '76%',
                width: '60px',
                padding: '0px 0px 0px, 0px',
                margin: '0px 8px 7px 0px',
                borderRadius: '36px',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '14px',
                alignItems: 'center',
              }}
              onClick={() => setRadio('track')}
            >
              Songs
            </div>

            <div
              style={{
                backgroundColor: 'grey',
                height: '76%',
                width: '60px',
                padding: '0px 0px 0px 0px',
                margin: '0px 0px 7px 0px',
                borderRadius: '36px',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '14px',
                alignItems: 'center',
              }}
              onClick={() => setRadio('album')}
            >
              Albums
            </div>
          </div>




        </div>
      </div>

      {/* bottom container */}
      <div
        style={{
          backgroundColor: 'pink',
          height: '100%',
          padding: '2px 2px 2px 2px',
          margin: '2px 2px 2px 2px'

        }}
      >
        {/* render container */}
        <div
          style={{
            backgroundColor: 'grey',
            height: '100%',
          }}
        >
          {radio === 'track' &&
            <Tracks
              results={results}
            />
          }

        </div>
      </div>
    </div>

  );
}

export default Search;



