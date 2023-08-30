import React from 'react'
import { useDataContext } from '../hooks/useDataContext';

function Albums() {

  const { albumData, dispatch } = useDataContext()

  return (
    <div className='sidebar-render'>
      {albumData?.items?.map((album) => (
        <div className='sidebar-item-container'
          key={album.album.id}
          style={{
            cursor: 'pointer',
          }}
          onClick={() => {
            dispatch({
              type: 'VIEW_IN_CONSOLE',
              payload: {
                imageURL: album.album.images[0].url,
                albumName: album.album.name,
                artistName: album.album.artists[0].name,
                totalTracks: album.album.total_tracks,
                tracks: album.album.tracks.items,
                year: album.album.release_date.split('-')[0],
              }
            })
            dispatch({ type:'CHANGE_VIEW_TYPE',payload: 'AlbumView' })
          }}
        >
          <img
            src={album.album.images[0]?.url}
            style={{
              borderRadius: '5px',
              margin: '2px'
            }}
          />
          <div
            style={{
              color: 'white',
              marginLeft: '3px',
              padding: '2px'
            }}
          >
            <div
              style={{
                height: '50%',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {album.album.name}

            </div>
            <div
              style={{
                height: '50%',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {album.album.artists[0].name}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Albums