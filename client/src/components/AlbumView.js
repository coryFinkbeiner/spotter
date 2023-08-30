import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';
import Track from './Track'

function AlbumView() {

  const { inView } = useDataContext()

  return (

    <div className='AlbumPlaylistView'>
      <div className='view-top'>
        <img className='view-top-img'
          src={inView.imageURL}
        />
        <div
          style={{
            margin: '12px',
            marginLeft: '9px',
            padding: '2px',
          }}
        >
          <div>
            Album
          </div>

          <div
            style={{
              fontSize: '40px',
              fontWeight: 'bold',
            }}
          >
            {inView.albumName}
          </div>

          <div>
            {inView.artistName} &middot;  {inView.total_tracks} songs
          </div>


        </div>
    </div>


    <div
      style={{
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 13vh)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {inView.tracks?.map((track, index) => (
        <Track
          key={index}
          index={index}
          image={inView.imageURL}
          trackName={track.name}
          // artistName={track.artists[0].name}
          albumName={inView.albumName}
          duration_ms={track.duration_ms}
          uri={track.uri}
        />
      ))}
    </div>
    </div>
  )
}

export default AlbumView




