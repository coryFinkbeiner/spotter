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
            marginTop: '80px'

          }}
        >
          <div
            style={{
              color: 'white',
              fontSize: '14px',
            }}
          >
            Album
          </div>

          <div
            style={{
              fontSize: '36px',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              color: 'white',
              paddingBottom: '20px',
              paddingTop: '6px',
            }}
          >
            {inView.albumName}
          </div>

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
            <div style={{fontWeight: 'bold'}}>{inView.artistName} </div> &nbsp;
            &middot; {inView.year} &middot; {inView.totalTracks} songs
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




