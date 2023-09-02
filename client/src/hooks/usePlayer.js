import React from 'react'
// import SpotifyWebPlayer from 'sdk.scdn.co/spotify-player.js';
import { useDataContext } from './useDataContext';


function usePlayer() {
  const { accessToken, player, dispatch } = useDataContext()



  if (!player) {

    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const newPlayer = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: cb => { cb(accessToken) },
        volume: 0.5
      });

      newPlayer.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });

      newPlayer.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      newPlayer.addListener('initialization_error', ({ message }) => {
        console.error(message);
      });

      newPlayer.addListener('authentication_error', ({ message }) => {
          console.error(message);
      });

      newPlayer.addListener('account_error', ({ message }) => {
          console.error(message);
      });

      newPlayer.connect().then(success => {
        if (success) {
          console.log('The Web Playback SDK successfully connected to Spotify!');
          dispatch({ type: 'SET_PLAYER', payload: newPlayer });
        }
      });
    };


  }


}

export default usePlayer