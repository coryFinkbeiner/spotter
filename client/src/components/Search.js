import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDataContext } from '../hooks/useDataContext';
import Track from './Track'
import Album from './Album'
import Artist from './Artist'

import { SearchIcon, XIcon } from '@heroicons/react/outline'


function Tracks({ results }) {
  if (!results.tracks) {
    return <div>Search Songs</div>
  }

  return (
    results?.tracks.items.map((item, index) => (
      <Track
        key={index}
        index={index}
        image={item.album.images[0].url}
        trackName={item.name}
        artistName={item.artists[0].name}
        albumName={item.album.name}
        duration_ms={item.durations_ms}
        uri={item.uri}
      />
    ))
  );
}

function Albums({ results }) {
  if (!results.albums) {
    return <div>Search Albums</div>;
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        height: '100%',
        alignItems: 'start',
        rowGap: '0',
      }}
    >
      {results?.albums.items.map((item, index) => (
        <Album
          index={index}
          imageURL={item.images[2].url}
          albumName={item.name}
          artistName={item.artists[0].name}
          release_date={item.release_date}
          item={item}
          id={item.id}
        />
      ))}
    </div>
  );

}

function Artists({ results }) {
  if (!results.artists) {
    return <div>Search Artists</div>;
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        height: '100%',
        alignItems: 'start',
        rowGap: '0',
      }}
    >
      {results?.artists.items.map((item, index) => (
        <Artist
          key={item.id}
          index={index}
          imageURL={item.images[0].url}
          artistName={item.name}
          item={item}
          id={item.id}
        />
      ))}
    </div>
  );
}



function Search() {
  const [query, setQuery] = useState('');
  const [radio, setRadio] = useState('artist');
  const [results, setResults] = useState({});
  const { accessToken, dispatch } = useDataContext();
  const [count, setCount] = useState(0)
  const [focus, setFocus] = useState(false)

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
        // console.log('search response.data', response.data);
      } catch (error) {
        // console.log('Search Error:', error);
      }
    };
    fetchData()
  }, [count, radio, accessToken]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: 'rgb(18, 18, 18)',
        height: '100%',
        padding: '4px, 4px, 4px, 4px',
        marginTop: '10px',
        borderRadius: '8px',
      }}
    >
      {/* top container */}
      <div
        style={{
          margin: '6px',
          padding: '10px, 10px, 10px, 10px',
          height: '105px',
          borderRadius: '8px',
        }}
      >
        <div
          style={{
            height: '64px',
            margin: '4px, 4px, 4px, 4px',
            padding: '6px'
          }}
        >
          {/* Search Bar */}
          <div
            style={{
              borderRadius: '30px',
              width: '355px',
              height: '90%',
              display: 'flex',
              flexDirection: 'row',
              padding: '4px, 4px, 4px, 4px',
              backgroundColor: 'rgb(40, 40, 40)',
              border: focus ? '2px solid white' : 'none',
            }}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          >
            <div
              style={{
                width: '42px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

              }}
              onClick={() => setCount(count + 1)}
            >
              <SearchIcon
                style={{
                  color: 'white',
                  height: '42%'
                }}
              />
            </div>
            <input
              type="text"
              value={query}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setCount(count + 1)
                }
              }}
              tabIndex="0"
              style={{
                background: 'transparent',
                width: '266px',
                border: 'none',
                color: 'white',
                outline: 'none',
              }}
            />
            <div
              style={{
                width: '42px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}

            >
              <XIcon
                style={{
                  color: 'white',
                  height: '51%',
                }}
                onClick={() => setQuery('')}
              />
            </div>
          </div>

          {/* Radio buttons container */}
          <div
            style={{
              height: '100%',
              width: '100%',
              margin: '5px 0px 0px 0px',
              padding: '7px 4px 4px 4px',
              display: 'flex',
              flex: 'row'
            }}
          >
            <div
              style={{
                backgroundColor: radio === 'artist' ? 'white' : 'rgb(40, 40, 40)',
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
                cursor: 'pointer',
                color: radio === 'artist' ? 'black' : 'white'
              }}
              onClick={() => setRadio('artist')}
            >
              Artists
            </div>

            <div
              style={{
                backgroundColor: radio === 'track' ? 'white' : 'rgb(40, 40, 40)',
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
                cursor: 'pointer',
                color: radio === 'track' ? 'black' : 'white'
              }}
              onClick={() => setRadio('track')}
            >
              Songs
            </div>

            <div
              style={{
                backgroundColor: radio === 'album' ? 'white' : 'rgb(40, 40, 40)',
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
                cursor: 'pointer',
                color: radio === 'album' ? 'black' : 'white'
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
          height: '100%',
          padding: '2px 2px 2px 2px',
          margin: '2px 2px 2px 2px'
        }}
      >
        {/* render container */}
        <div
          style={{
            height: '100%',
          }}
        >
          {radio === 'track' &&
            <Tracks results={results}/>
          }
          {radio === 'album' &&
            <Albums results={results}/>
          }
          {radio === 'artist' &&
            <Artists results={results}/>
          }
        </div>
      </div>
    </div>
  );
}

export default Search;