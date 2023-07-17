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
            {inView.owner.display_name} &middot;  {inView.tracks.total} songs, duration
          </div>
          <div>
            {inView.name}
          </div>
          <div>
            {inView.type.charAt(0).toUpperCase() + inView.type.slice(1)}
          </div>
        </div>
      </div>

      <div className='View-render-container'>
        <div className='View-render-keys'>
          # Title Album Clock
        </div>
        <div className='View-render-area'>
        </div>

      </div>

    </div>
  )
}

export default PlaylistView

// not includeing Data added


// black background for now, instead of fancy gradient

// looks like i might have to do a little math to get the duration, doesn't seem like it's available


// inView.primary_color may be the attribute i was looking for for the gradient

