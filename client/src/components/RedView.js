import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';
import Track from './Track'

function RedView() {
  const { red } = useDataContext()

  console.log({red})


  return (
    <div
      style={{
        margin: '6px',
        padding: '2px',
        height: '100vh',
        borderRadius: '8px',
      }}
    >

      {/* Top */}
      <div
        style={{
          height: '13%',
          borderRadius: '8px',

          backgroundColor: 'red'
        }}
      ></div>

      {/* Render */}
      <div
        style={{
          overflowY: 'auto',
          maxHeight: 'calc(100vh - 13vh)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {red?.map((track, index) => (
          <Track
            key={index}
            index={index}
            image={track.image}
            trackName={track.trackName}
            albumName={track.albumName}
            duration_ms={track.duration_ms}
            uri={track.uri}
            trackObject={track.trackObject}
          />
        ))}
      </div>
    </div>
  )
}

export default RedView