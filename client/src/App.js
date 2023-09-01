import Login from './components/Login'
import Dashboard from "./components/Dashboard"
import './App.css';
import { useDataContext } from './hooks/useDataContext'
import React, { useEffect} from 'react'
import AppLogin from './components/AppLogin'
import Sidebar from './components/Sidebar'
import useAuth from "./hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node"
import axios from 'axios';
const spotifyApi = new SpotifyWebApi({
  clientId: "b5fd7277f6654b3e881be98a94afd5fc",
})

function App() {
  const accessToken = useAuth()
  const { code, dispatch } = useDataContext()
  const newCode = new URLSearchParams(window.location.search).get("code")

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
        console.log('playlists response data', response.data);
        dispatch({
          type: 'STORE_PLAYLISTS',
          payload: response.data
        });

      } catch (error) {
        console.log('Album fetch Error:', error);
      }
    };

    const fetchAlbums = async () => {
      try {
        const response = await axios.get(`https://api.spotify.com/v1/me/albums`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log('albums response data', response.data);
        dispatch({
          type: 'STORE_ALBUMS',
          payload: response.data
        });
      } catch (error) {
        console.log('Playlist fetch Error:', error);
      }
    };
    fetchPlaylists();
    fetchAlbums();

    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {

      const player = new window.Spotify.Player({
          name: 'Web Playback SDK',
          getOAuthToken: cb => { cb(accessToken); },
          volume: 0.5
      });

        // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });

      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.addListener('initialization_error', ({ message }) => {
        console.error(message);
      });

      player.addListener('authentication_error', ({ message }) => {
          console.error(message);
      });

      player.addListener('account_error', ({ message }) => {
          console.error(message);
      });

      player.connect();

    }

  }, [accessToken])



  return code ? <Dashboard /> : <Login />
}
export default App;