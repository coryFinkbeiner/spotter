import React from 'react'
import TrackElement from './TrackElement'

function RenderBox({

  tracks,


}) {

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

  ]


  const Layout = ({ children }) => {


    return (
      <div
        style={{
          backgroundColor: 'pink',
          // height: '100%',

          display: 'grid',

          // gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',

          gridTemplateColumns: 'repeat(3, 1fr)',

          gridGap: '2px'

        }}
      >
        {children}
      </div>
    )
  }







  return (
   <Layout>
     {testTracks.map((trackData, index) => (
        <TrackElement
          key={index}
          trackData={trackData}
        />
      ))}
   </Layout>
  )
}

export default RenderBox

// can i use this for everything? SpotifySidebar and Dash?