import React, { useEffect, useState } from 'react'
import RenderBox from "./RenderBox"
import CollectionElement from "./CollectionElement"
import { useData } from '../DataProvider';
import useSpotifyAPI from '../useSpotifyAPI';

import { collectionsBox } from '../styles'


function SpotifySidebar() {
  const { myPlaylists, myAlbums, setSelection } = useData()

  const [ radio, setRadio ] = useState(null);

  console.log({myAlbums, myPlaylists})

  useEffect(() => {
    setRadio(myAlbums)


  }, [ myAlbums ])







  // const Layout = ({ children }) => {
  //   return (
  //     <div
  //       style={{
  //         height: '100%',
  //         display: 'grid',
  //         gridTemplateRows: '1fr 2.4fr',
  //         minWidth: '159px'
  //       }}
  //     >
  //       {/* Top */}
  //       <div
  //         style={{
  //           backgroundColor: 'green'
  //         }}
  //       >
  //       </div>
  //       {/* RenderBox container */}
  //       <div
  //         style={{
  //           position: 'relative',
  //           padding: '2px'
  //         }}
  //       >{children}</div>
  //     </div>
  //   )
  // }


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
        >{radio?.href}
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

    </Layout>
  )




  // return (
  //   <Layout>
  //     <RenderBox itemType={'collection'}>

  //     {/* {testTracks.map((collectionData, index) => (
  //         <CollectionElement
  //           key={index}
  //           collectionData={collectionData}
  //         />
  //       ))} */}

  //     </RenderBox>
  //   </Layout>
  // )
}

export default SpotifySidebar

// could have a * Radio for asterisking Spotify Collections you are interested in...
