import React, { useState, useEffect }  from 'react'
import useAuth from "../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node"
import { useDataContext } from '../hooks/useDataContext'
import axios from 'axios'

const spotifyApi = new SpotifyWebApi({
  clientId: "b5fd7277f6654b3e881be98a94afd5fc",
})


const queueLooper = () => {

  // POP_QUEUE





}


async function QueuePOST(uri, accessToken) {
  try {
    const response = await axios.post(
      'https://api.spotify.com/v1/me/player/queue',
      null,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          uri: uri,
        },
      }
    );
    console.log('Added to queue')
  } catch (error) {
    console.log('Error:', error);
  }
}

function MyQueue() {
  const accessToken = useAuth()
  const { myQueue, poppedTrack, dispatch } = useDataContext()

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
    dispatch({ type: 'SET_ACCESS_TOKEN', payload: accessToken })
  }, [accessToken])

  useEffect(() => {
    if (poppedTrack) {
      console.log('uri', poppedTrack.uri);
      QueuePOST(poppedTrack.uri, accessToken);
    }
  }, [poppedTrack]);

  return (
    <div>----------------MyQueue--------------------
      <button
        onClick={() => {
          dispatch({ type: 'POP_QUEUE' })
        }}
      >
        Add To Spotify Queue
      </button>
      {<ul>
        {myQueue?.map((track, index) => (
          <li key={index}>{track.name} - {track.artists[0].name}</li>
        ))}
      </ul>}
    <div>-------------------------------------------</div>
    </div>
  )
}

export default MyQueue


// am i going to be compounding the 3 seconds delay?
  // do i need to set the delay at first, of 3 seconds, but then after that, set the delay to the exact duration of the track?

















// import React, { useState, useEffect }  from 'react'
// import useAuth from "../hooks/useAuth";
// import SpotifyWebApi from "spotify-web-api-node"
// import { useDataContext } from '../hooks/useDataContext'
// import axios from 'axios'

// const spotifyApi = new SpotifyWebApi({
//   clientId: "b5fd7277f6654b3e881be98a94afd5fc",
// })

// async function addToQueue(url, accessToken, uri) {
//   try {
//     const response = await axios.post(
//       url,
//       null,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//         params: {
//           uri: uri,
//         },
//       }
//     );
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// function MyQueue() {
//   const accessToken = useAuth()
//   const { myQueue, dispatch } = useDataContext()

//   useEffect(() => {
//     if (!accessToken) return
//     spotifyApi.setAccessToken(accessToken)
//     dispatch({ type: 'SET_ACCESS_TOKEN', payload: accessToken })
//   }, [accessToken])

//   return (
//     <div>----------------MyQueue--------------------
//       {<ul>
//         {myQueue?.map((track, index) => (
//           <li key={index}>{track.name} - {track.artists[0].name}</li>
//         ))}
//       </ul>}
//     <div>-------------------------------------------</div>
//     </div>
//   )
// }

// export default MyQueue
