import React, { useEffect, useState } from 'react'
import RenderBox from "./RenderBox"
import CollectionElement from "./CollectionElement"
import { useData } from '../DataProvider';
import useSpotifyAPI from '../useSpotifyAPI';
import { collectionsBox } from '../styles'





function SpotifySidebar() {
  const { myPlaylists, myAlbums, setSelection } = useData()

  const [ radio, setRadio ] = useState(myPlaylists);


  const Layout = ({ children }) => {
    return (
      <div
        style={{
          height: '100%',
          display: 'grid',
          gridTemplateRows: '1fr 2.4fr',
          minWidth: '159px'
        }}
      >
        <div
          style={{
            backgroundColor: 'green',
            color: 'white'
          }}
        >
          <div>
            <button onClick={() => setRadio(myAlbums)}>Albums</button>
            <button onClick={() => setRadio(myPlaylists)}>Playlists</button>
          </div>

        </div>

        <div
          style={{
            position: 'relative',
            padding: '2px'
          }}
        >
          <div style={collectionsBox}>
            {children}
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      {radio?.items.map((item, index) => (

        <CollectionElement
          item={item}
          key={index}
        />

      ))}
    </Layout>
  )
}



export default SpotifySidebar


// could have a * Radio for asterisking Spotify Collections you are interested in...


