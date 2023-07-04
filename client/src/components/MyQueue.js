import React, { useState, useEffect }  from 'react'
import useAuth from "../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node"
import { useDataContext } from '../hooks/useDataContext'
import axios from 'axios'

const spotifyApi = new SpotifyWebApi({
  clientId: "b5fd7277f6654b3e881be98a94afd5fc",
})

async function addToQueue(url, accessToken, uri) {
  try {
    const response = await axios.post(
      url,
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
  } catch (error) {
    console.log('Error:', error);
  }
}

function MyQueue() {
  const accessToken = useAuth()
  const { myQueue, poppedTrack, dispatch } = useDataContext()


  console.log('from MyQueue', {myQueue}, {poppedTrack})

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    const addTrackToQueue = async () => {
      // const uri = myQueue.pop();
      await addToQueue('https://api.spotify.com/v1/me/player/queue', accessToken, "spotify:track:3kep7ZWLCMAsSDhEOI6eeu");

    };

    addTrackToQueue();

  }, [accessToken, myQueue]);

  return (
    <div>MyQueue
      <button
        onClick={() => dispatch({ type: 'POP_QUEUE' })}
      >Pop Queue</button>
      <p>popped track: {poppedTrack}</p>
      {myQueue ? (
        <ul>
          {myQueue.map((track, index) => (
            <li key={index}>{track}</li>
          ))}
        </ul>
      ) : (
        <p>Queue is empty.</p>
    )}
    </div>
  )
}

export default MyQueue
