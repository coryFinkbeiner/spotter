import React from 'react'
import RenderBox from "./RenderBox"
import CollectionElement from "./CollectionElement"
import { useData } from '../DataProvider';

function SpotifySidebar() {

  const { myPlaylists, myAlbums } = useData()

  console.log({myPlaylists, myAlbums})

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

        {/* Top */}
        <div
          style={{
            backgroundColor: 'green'
          }}
        >
        </div>

        {/* RenderBox container */}
        <div
          style={{
            position: 'relative',
            padding: '2px'
          }}
        >{children}</div>
      </div>
    )
  }

  return (
    <Layout>
      <RenderBox itemType={'collection'}>

      {/* {testTracks.map((collectionData, index) => (
          <CollectionElement
            key={index}
            collectionData={collectionData}
          />
        ))} */}

      </RenderBox>
    </Layout>
  )
}

export default SpotifySidebar

// could have a * Radio for asterisking Spotify Collections you are interested in...
