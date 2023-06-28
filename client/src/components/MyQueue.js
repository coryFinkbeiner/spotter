import React, { useState, useEffect }  from 'react'
import useAuth from "../hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node"
import { useDataContext } from '../hooks/useDataContext'

import axios from 'axios'

const spotifyApi = new SpotifyWebApi({
  clientId: "b5fd7277f6654b3e881be98a94afd5fc",
})

function MyQueue() {
  const accessToken = useAuth()
  const { myQueue } = useDataContext()
  console.log('0', myQueue)

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {



    const url = 'https://api.spotify.com/v1/me/player/queue'
    const uri = 'spotify:track:4iV5W9uYEdYUVa79Axb7Rh';

    axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      params: {
        uri: uri
      }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log('Error:', error);
      });

  }, [accessToken]);

  return (
    <div>MyQueue</div>
  )
}

export default MyQueue