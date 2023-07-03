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
    console.log('response data for queue add', response.data);
  } catch (error) {
    console.log('Error:', error);
  }
}



function MyQueue() {
  const accessToken = useAuth()
  const { myQueue, poppedTrack, dispatch } = useDataContext()
  const [trackTime, setTrackTime] = useState(null);
  console.log('myQueue from top', myQueue)
  console.log({poppedTrack})

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])


  const addToPlaybackQueueWithDelay = async () => {

    dispatch({ type: 'POP_QUEUE' });

    // if (myQueue.length === 0) {
    //   console.log('QUEUE EMPTY')
    //   return
    // }
    // console.log({myQueue})
    // const uri = myQueue.pop();
    const response = await addToQueue('https://api.spotify.com/v1/me/player/queue', accessToken, "spotify:track:3kep7ZWLCMAsSDhEOI6eeu");
    // const trackDurationMs = response.duration_ms;
    // const delay = trackDurationMs - 5000;

    // setTrackTime(trackDurationMs);

    setTimeout(() => {
      addToPlaybackQueueWithDelay(); // Call the function recursively for the next track
    }, 25000);
  };



  // useEffect(() => {
  //   const addTrackToQueue = async () => {
  //     // const uri = myQueue.pop();
  //     await addToQueue('https://api.spotify.com/v1/me/player/queue', accessToken, "spotify:track:3kep7ZWLCMAsSDhEOI6eeu");
  //   };

  //   addTrackToQueue();
  // }, [accessToken, myQueue]);


  return (
    <div>
      MyQueue
      <p>popped track {poppedTrack}</p>
      <button onClick={() => addToPlaybackQueueWithDelay()}>Start Playback</button>
    </div>
  )
}

export default MyQueue



// useEffect(() => {

//   const url = 'https://api.spotify.com/v1/me/player/queue'
//   // const uri = myQueue.pop()

//   // console.log({uri}, {myQueue})

//   // axios.post(url, null, {
//   //   headers: {
//   //     Authorization: `Bearer ${accessToken}`
//   //   },
//   //   params: {
//   //     uri: uri
//   //   }
//   // })
//   //   .then(response => {
//   //     console.log(response.data);
//   //   })
//   //   .catch(error => {
//   //     console.log('Error:', error);
//   //   });

// }, [accessToken]); // should i add myQueue as a dependency?