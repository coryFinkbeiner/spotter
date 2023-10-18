import React from 'react'
import RenderBox from "./RenderBox"
import CollectionElement from "./CollectionElement"

function SpotifySidebar() {

  const testTracks = [

    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },
    {
      imageURL: "https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd",
      trackName: 'TEST trackName',
      albumName: 'TEST albumName',
    },

  ]





  const Layout = ({ children }) => {

    return (
      <div
        style={{
          height: '100%',
          display: 'grid',
          gridTemplateRows: '1fr 2.4fr',
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
      <RenderBox columnAmount={2}>
      {testTracks.map((collectionData, index) => (
          <CollectionElement
            key={index}
            collectionData={collectionData}
          />
        ))}

      </RenderBox>
    </Layout>
  )
}

export default SpotifySidebar

// could have a * Radio for asterisking Spotify Collections you are interested in...
