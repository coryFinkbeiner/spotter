import React from 'react'
import SpotifySidebar from './SpotifySidebar'
import SpotifyConsole from './SpotifyConsole'

function MySpotify() {

  const Layout = ({children}) => {

    const [ left, right ] = React.Children.toArray(children);

    return (
      <div
        style={{
          height: '100%',
          backgroundColor: 'red',
          color: 'white',
          display: 'grid',
          gridTemplateColumns: '1fr 3.5fr',
        }}
      >
        <div
          style={{
            backgroundColor: 'blue',
            height:'100%'
          }}
        >{left}</div>
        <div
          style={{
            backgroundColor: 'pink',
            height:'100%'
          }}
        >{right}</div>
      </div>
    )
  }





  return (
    <Layout>
      <SpotifySidebar />
      <SpotifyConsole />
    </Layout>
  )
}

export default MySpotify