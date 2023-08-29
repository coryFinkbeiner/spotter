import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';
import Track from './Track'

function AlbumView() {

  const { inView } = useDataContext()

  return (


    <div className='AlbumPlaylistView'>
      <div className='view-top'>
        <img className='view-top-img'
          src={inView.images[0]?.url}
        />
        <div className='view-top-info'>
          <div>
            {inView.artists[0].name} &middot;  {inView.total_tracks} songs, 48 min 54 sec
          </div>

        </div>
    </div>


    <div className="song-list"
      style={{
        overflowY: 'auto',
        maxHeight: '460px'
      }}
    >
      {inView.tracks.items?.map((track, index) => (
        <Track
          key={index}
          index={index}
          image={inView.images[2]?.url}
          trackName={track.name}
          // artistName={track.artists[0].name}
          albumName={inView.name}
          duration_ms={track.duration_ms}
          uri={track.uri}
        />
      ))}
    </div>
    </div>
  )
}

export default AlbumView




