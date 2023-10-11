import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Track from './Track'

function HistoryView() {

  const { inView } = useDataContext()

  console.log({inView})

  return (

    <div className='AlbumPlaylistView'>
      <div className='view-top'>
        <img className='view-top-img'
          src={"https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd"}
        />
        <div
          style={{
            margin: '12px',
            marginLeft: '9px',
            padding: '2px',
            marginTop: '80px'
          }}
        >
          <div
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              fontSize: '15px',
              textOverflow: 'ellipsis',
              color: 'white',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div style={{fontWeight: 'bold'}}
            >
              {inView[0]}
            </div>
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
        {inView[1]?.map((track, index) => (
          <Track
            key={index}
            index={index}
            image={track.track_response.album.images[0].url}
            trackName={track.track_response.name}
            albumName={track.track_response.album.name}
            duration_ms={track.track_response.duration_ms}
            uri={track.track_response.uri}
            trackObject={track}
          />
        ))}
      </div>
    </div>
  )
}

export default HistoryView