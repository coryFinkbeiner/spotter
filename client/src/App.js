import Login from './components/Login'
import Dashboard from "./components/Dashboard"
import './App.css';
import { useDataContext } from './hooks/useDataContext'
import React, { useEffect, useState } from 'react'
import AppLogin from './components/AppLogin'
import Sidebar from './components/Sidebar'
import useAuth from "./hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node"
import axios from 'axios';

import usePlayer from './hooks/usePlayer'


const spotifyApi = new SpotifyWebApi({
  clientId: "b5fd7277f6654b3e881be98a94afd5fc",
})

function App() {
  const accessToken = useAuth()
  const { code, dispatch, player } = useDataContext()
  const newCode = new URLSearchParams(window.location.search).get("code")


  usePlayer()


  useEffect(() => {
    if (newCode) dispatch({type: 'SET_CODE' , payload: newCode })
  }, [])

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
    dispatch({ type: 'SET_ACCESS_TOKEN', payload: accessToken })
  }, [accessToken])

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get(`https://api.spotify.com/v1/me/playlists`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        dispatch({
          type: 'STORE_PLAYLISTS',
          payload: response.data
        });

      } catch (error) {
        // console.log('Album fetch Error:', error);
      }
    };

    const fetchAlbums = async () => {
      try {
        const response = await axios.get(`https://api.spotify.com/v1/me/albums`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        dispatch({
          type: 'STORE_ALBUMS',
          payload: response.data
        });
      } catch (error) {
        // console.log('Playlist fetch Error:', error);
      }
    };
    fetchPlaylists();
    fetchAlbums();

  }, [accessToken])


  return code ? <Dashboard /> : <Login />
}
export default App;