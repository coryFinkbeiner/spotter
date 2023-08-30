import React, { useState } from 'react'
import { useDataContext } from '../hooks/useDataContext';

function Album({ album}) {
  const [isHovering, setIsHovering] = useState(false);
  const { dispatch } = useDataContext();

  return (
    <div
      style={{
        cursor: 'pointer',
        height: '65px',
        margin: '1px',
        display: 'flex',
        flexDirection: 'row',
        padding: '2px',
        backgroundColor: isHovering ? 'rgb(40, 40, 40)' : 'transparent',
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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
          },
        });
        dispatch({ type: 'CHANGE_VIEW_TYPE', payload: 'AlbumView' });
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
  );
}

function Albums() {

  const { albumData, dispatch } = useDataContext()

  return (
    <div className='sidebar-render'>
      {albumData?.items?.map((album) => (
        <Album key={album.album.id} album={album} />
      ))}
    </div>
  )
}

export default Albums