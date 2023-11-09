import React, { useEffect, useState } from 'react';
import { useData } from '../DataProvider';
import { collectionsBox } from '../styles';
import Album from './Album';
import Playlist from './Playlist';

function Sidebar() {
  const { myPlaylists, myAlbums } = useData();
  const [ radio, setRadio ] = useState('albums');

  const Albums = () => (
    myAlbums?.items.map((item, index) => (
      <Album
        item={item}
        key={index}
      />
    ))
  )

  const Playlists = () => (
    myPlaylists?.items.map((item, index) => (
      <Playlist
        item={item}
        key={index}
      />
    ))
  )

  return (
    <div
      style={{
        height: '100%',
        display: 'grid',
        gridTemplateRows: '1fr 2.4fr',
        minWidth: '159px'
      }}
    >
      <div
        style={{
          backgroundColor: 'green',
          color: 'white'
        }}
      >
        <div>
          <button onClick={() => setRadio('albums')}>Albums</button>
          <button onClick={() => setRadio('playlists')}>Playlists</button>
        </div>

      </div>

      <div
        style={{
          position: 'relative',
          padding: '2px',
          background: 'lightRed',
          height: '100%',
        }}
      >
        <div style={collectionsBox}>
          <Albums />
        </div>
      </div>
    </div>
  )
}

export default Sidebar