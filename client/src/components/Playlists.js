import React from 'react'

function Playlists() {

  return <div>test pl</div>


  // const { playlistData, dispatch } = useDataContext()






  // if (!results) {
  //   return <div>Playlists not found</div>;
  // }

  // // return <div>{results.href}</div>

  // return (
  //   <div className='sidebar-render'>
  //     {results?.items?.map((playlist) => (
  //       <div className='sidebar-item-container'
  //         key={playlist.id}
  //         onClick={() => {
  //           dispatch({ type: 'VIEW_IN_CONSOLE', payload: playlist })
  //           dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'PlaylistView' })
  //         }}
  //       >
  //         <img
  //           src={playlist.images[0]?.url}
  //           style={{
  //             borderRadius: '5px',
  //             margin: '2px'
  //           }}
  //         />
  //         <div
  //           style={{
  //             color: 'white',
  //             marginLeft: '3px',
  //             padding: '2px'
  //           }}
  //         >
  //           <div
  //             style={{
  //               height: '50%',
  //               fontWeight: 'bold',
  //             }}
  //           >
  //             {playlist.name}

  //           </div>
  //           <div
  //             style={{
  //               height: '50%'
  //             }}
  //           >
  //             {playlist.owner.display_name}
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // )
}

export default Playlists