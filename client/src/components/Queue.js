import React from 'react'
import Track from './Track'
import { useDataContext } from '../hooks/useDataContext';

function Queue() {
  const { myQueue, dispatch } = useDataContext();

  return (
    <div
      style={{
        padding: '20px 10px 10px 10px',
        margin: '10px 10px 0px 0px',
        backgroundColor: 'rgb(18, 18, 18)',
        borderRadius: '8px',
        height: '90vh'
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
            onClick={() => {
              dispatch({ type: 'CLEAR_QUEUE' })
            }}
            style={{
              border: '1px solid white',
              borderRadius: '25px',
              color: 'white',
              fontSize: '15px',
              padding: '2px 12px 2px 12px',
              cursor: 'pointer'
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

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          maxHeight: '460px'
        }}
      >
        {myQueue && myQueue?.map((track, index) => (
          <Track
            key={index}
            index={index}
            image={track.image}
            trackName={track.trackName}
            artistName={track.artistName}
            albumName={track.albumName}
            duration_ms={track.duration_ms}
            uri={track.uri}
          />
        ))}
      </div>

    </div>
  )
}

export default Queue