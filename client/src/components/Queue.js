import React from 'react'
import Track from './Track'
import { useDataContext } from '../hooks/useDataContext';

function Queue() {

  const { poppedTrack, myQueue } = useDataContext();



  return (
    <div
      style={{
        padding: '20px 10px 10px 10px',
        margin: '10px 10px 0px 0px',
        backgroundColor: 'rgb(18, 18, 18)',
        borderRadius: '8px',
        height: '87vh'

      }}
    >

      <div
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: '23px',
          margin: '2px 2px 10px 2px'
        }}
      >
        Queue
      </div>

      <div
        style={{
          // backgroundColor: 'green',
          height: '100px',
        }}
      >
        <div
          style={{
            margin: '20px 10px 0px 5px',
            color: 'grey'
          }}
        >
          Now Playing
        </div>
        <Track
          index={0}
          image={"https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd"}
          trackName={'test'}
          artistName={'test'}
          albumName={'test'}
          duration_ms={1000}
          uri={"spotify:playlist:2U5jSnNYEG1afQD8D1umrx"}
        />
      </div>

      <div
        style={{
        }}
      >

        <div
        style={{
          display: 'flex',
          margin: '14px 10px 0px 7px',
        }}
        >

          <div
            style={{
              color: 'grey',
              marginRight: '280px'
            }}
          >
            Next in queue
          </div>
          <div
            style={{
              border: '1px solid white',
              borderRadius: '25px',
              color: 'white',
              fontSize: '15px',
              padding: '2px 12px 2px 12px'
            }}
          >
            Clear queue
          </div>


        </div>

        <div
        style={{
        }}
        >
        </div>
      </div>


    </div>
  )
}

export default Queue