import React from 'react'

function SpotifyConsole() {


  const Layout = ({ children }) => {

    // could i put the fr in the component itself? and set the other one to auto? or is it auto set to auto?


    // const [ top, bottom ] = React.Children.toArray(children);

    return (
      <div
        style={{
          backgroundColor: 'grey',
          height: '100%',
          display: 'grid',
          gridTemplateRows: '1fr 2.4fr',
        }}
      >
        <div
          style={{
            backgroundColor: 'grey',

          }}
        ></div>
        <div
          style={{
            backgroundColor: 'yellow',

          }}
        ></div>
      </div>
    )
  }



  return (
    <Layout>

    </Layout>
  )
}

export default SpotifyConsole

// need to conditionally render these...

// SpotifySearch
// AlbumView
// PlaylistView
// PlaylistView
// QueueView
//