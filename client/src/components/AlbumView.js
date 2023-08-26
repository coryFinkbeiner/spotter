import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';
import Track from './Track'

function AlbumView() {

  const { inView } = useDataContext()

  return (


    <div className='AlbumPlaylistView'>
      <div className='view-top'>
        <img className='view-top-img'
          src={inView.album.images[0]?.url}
        />
        <div className='view-top-info'>
          <div>
            {inView.album.artists[0].name} &middot;  {inView.album.total_tracks} songs, 48 min 54 sec
          </div>
          {/* <div>
            {inView.name}
          </div>
          <div>
            {inView.type.charAt(0).toUpperCase() + inView.type.slice(1)}
          </div> */}
        </div>
    </div>


    <div className="song-list"
      style={{
        overflowY: 'auto',
        maxHeight: '460px'
      }}
    >
      {inView.album.tracks.items?.map((track, index) => (
        <Track
          key={index}
          index={index}
          image={inView.album.images[2]?.url}
          trackName={track.name}
          artistName={track.artists[0].name}
          albumName={inView.album.name}
          duration_ms={track.duration_ms}
          uri={track.uri}
        />
      ))}
    </div>
    </div>
  )
}

export default AlbumView




