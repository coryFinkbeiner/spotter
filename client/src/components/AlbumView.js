import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';

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



    </div>
  )
}

export default AlbumView




