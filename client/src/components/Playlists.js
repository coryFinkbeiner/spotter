import React, { useState } from 'react'
import { useDataContext } from '../hooks/useDataContext';

function SidePlaylist({ playlist }) {
  const [isHovering, setIsHovering] = useState(false);
  const { dispatch } = useDataContext();

  return (
    <div className='sidebar-item-container'
      key={playlist.id}
      onClick={() => {
        dispatch({ type: 'VIEW_IN_CONSOLE', payload: playlist })
        dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'PlaylistView' })
      }}
      style={{
        cursor: 'pointer',
        backgroundColor: isHovering ? 'rgb(45, 45, 45)' : 'transparent',
        borderRadius: '6px',

      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        src={playlist.images[0]?.url}
        style={{
          borderRadius: '5px',
          margin: '2px'
        }}
      />
      <div
        style={{
          color: 'white',
          marginLeft: '3px',
          padding: '2px',
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
          {playlist.name}
        </div>
        <div
          style={{
            height: '50%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {playlist.owner.display_name}
        </div>
      </div>
    </div>
  )

}


function Playlists() {
  const { playlistData, dispatch } = useDataContext()

  if (!playlistData) {
    return <div>Playlists not found</div>;
  }

  return (
    <div className='sidebar-render'>
      {playlistData?.items?.map((playlist, index) => (
        <SidePlaylist playlist={playlist} id={index} />
      ))}
    </div>
  )
}

export default Playlists