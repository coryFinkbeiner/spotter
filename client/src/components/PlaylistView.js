import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';

function PlaylistView() {

  const { inView } = useDataContext()

  return (
    <div className='AlbumPlaylistView'>
      <div className='view-top'>
      <img
        src={inView.images[0]?.url}
        style={{
          margin: '12px'
        }}
      />
      </div>
    </div>
  )
}

export default PlaylistView