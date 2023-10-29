import React from 'react'
import RenderBox from "./RenderBox"
import TrackElement from './TrackElement'
import { useData } from '../DataProvider';

function Selection({
  imageURL,
  line1,
  line2,
  line3,
}) {

  const { selection } = useData()
  console.log({selection})

  const Layout = ({ children }) => {
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
            // backgroundColor: 'grey',
            display: 'grid',
            gridTemplateColumns: '1fr 2.4fr',
          }}
        >
          <img
            src={"https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd"}
            style={{
              height: '200px'
            }}
          />
          <div
            style={{
              backgroundColor: 'blue',
              height: '100%'
            }}
          >
            <div
              style={{

              }}
            >LINE 1</div>
            <div
              style={{

              }}
            >LINE 2</div>
            <div
              style={{

              }}
            >LINE 3</div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: 'yellow',
            padding: '2px',
            position: 'relative',

          }}
        >{children}</div>
      </div>
    )
  }


  return (
    <Layout>
      <RenderBox itemType={'track'}>
        {/* {testTracks.map((trackData, index) => (
          <TrackElement
            key={index}
            trackData={trackData}
          />
        ))} */}
      </RenderBox>
    </Layout>
  )
}

export default Selection


// could add connective functionality to App here... add to * Notes... something...
// or for a Selected Note, if could have a way to turn it into a Playlist...

