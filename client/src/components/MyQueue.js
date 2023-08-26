import React, { useState, useEffect }  from 'react'
import useAuth from "../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node"
import { useDataContext } from '../hooks/useDataContext'
import axios from 'axios'

const spotifyApi = new SpotifyWebApi({
  clientId: "b5fd7277f6654b3e881be98a94afd5fc",
})

async function queuePOST(uri, accessToken) {
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
      // console.log('uri', poppedTrack.uri);
      queuePOST(poppedTrack.uri, accessToken);

      setTimeout(() => {
        dispatch({ type: 'POP_QUEUE' })
      }, poppedTrack.duration_ms - 3000);

    }

  }, [poppedTrack]);

  return (
    <div className='my-queue'>----------------MyQueue--------------------
      <button
        onClick={() => {
          dispatch({ type: 'POP_QUEUE' })
        }}
      >
        Start Spotify Playback Loop
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

