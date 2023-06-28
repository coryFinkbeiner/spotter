import React, { useState, useEffect }  from 'react'
import useAuth from "../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node"
// import { useDataContext } from '../hooks/useDataContext'

import axios from 'axios'

const spotifyApi = new SpotifyWebApi({
  clientId: "b5fd7277f6654b3e881be98a94afd5fc",
})

function MyQueue() {
  const accessToken = useAuth()
  // const { myQueue } = useDataContext()
  // if (myQueue) console.log('0', myQueue[0])

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {

    console.log({accessToken})

    const url = 'https://api.spotify.com/v1/me/player/queue?uri=spotify%3Atrack%3A4iV5W9uYEdYUVa79Axb7Rh'

    axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log('Error:', error);
      });

  }, [accessToken]);


  // useEffect(() => {
  //   if (myQueue) {
  //     const uri = myQueue[0]
  //     console.log('inside add to queue... uri', uri)

  //     spotifyApi.setAccessToken(accessToken)


  //     spotifyApi.addToQueue(uri)
  //       .then(res => {
  //         console.log('queue add SUCCESS')
  //       })
  //       .catch(err => console.log('add to queue error:', err))
  //   } else {
  //     console.log('my queue is empty')
  //   }
  // }, [accessToken, myQueue]);

  return (
    <div>MyQueue</div>
  )
}

export default MyQueue