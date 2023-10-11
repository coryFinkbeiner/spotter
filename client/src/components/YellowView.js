import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';
import Track from './Track'

function YellowView() {
  const { yellow } = useDataContext()

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
          backgroundColor: 'yellow'
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
        {yellow?.map((track, index) => (
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

export default YellowView