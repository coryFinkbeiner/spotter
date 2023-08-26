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


    <div className="song-list"
      style={{
        overflowY: 'auto',
          maxHeight: '460px'
      }}
    >
      {inView.album.tracks.items.map((track, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px',
          }}
        >
            <div
              style={{
                padding: '15px',
                color: 'grey',
              }}
            >
              {index + 1}
            </div>
            <img
              src={inView.album.images[2]?.url}
              style={{
                height: '38px',
                borderRadius: '3px',
                margin: '2px',
              }}
          />
            <div
              style={{
                width: '225px'
              }}
            >
              <div
                style={{
                  color: 'white',
                  paddingRight: '15px',
                  paddingLeft: '15px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',

                }}
              >
                {track.name}
              </div>
              <div
                style={{
                  color: 'grey',
                  paddingRight: '15px',
                  paddingLeft: '15px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontSize: '13px'
                }}
              >
                {track.artists[0].name}
              </div>
            </div>
            <div
                style={{
                  color: 'grey',
                  paddingRight: '15px',
                  paddingLeft: '15px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontSize: '13px',
                  width: '160px'

                }}
              >
                {inView.album.name}
              </div>

            <div
              style={{
                color: 'grey',
                fontSize: '13px',
              }}
            >
              3:30
            </div>
          </div>
        ))}
      </div>



    </div>
  )
}

export default AlbumView




