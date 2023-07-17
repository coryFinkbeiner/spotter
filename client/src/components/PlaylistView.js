import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';

function PlaylistView() {

  const { inView } = useDataContext()

  return (
    <div className='AlbumPlaylistView'>
      <div className='view-top'>
        <img className='view-top-img'
          src={inView.images[0]?.url}

        />
        <div className='view-top-info'>
          <div>
            Playlist
          </div>
          <div>
            0AC
          </div>
          <div
            style={{

              marginLeft: '3px',
              padding: '2px'
            }}
          >
            Bodhi - 16 songs, 1hr 10min
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaylistView

// black background for now, instead of fancy gradient