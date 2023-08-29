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
        <div className='view-top-info'>
          <div>
            {inView.artistName} &middot;  {inView.total_tracks} songs
          </div>
        </div>
    </div>


    <div className="song-list"
      style={{
        overflowY: 'auto',
        maxHeight: '460px'
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




