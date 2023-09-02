import React, { useState, useEffect }  from 'react'
import { useDataContext } from '../hooks/useDataContext';
import { PlayIcon, ChevronRightIcon, ChevronLeftIcon, QueueListIcon } from '@heroicons/react/solid'

import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { HiOutlineQueueList, HiForward } from "react-icons/hi2";

function Lowbar() {
  const { dispatch, accessToken } = useDataContext()
  const [ player, setPlayer ] = useState(null)


  useEffect(() => {

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
            // dispatch({ type: 'SET_PLAYER', payload: newPlayer });
            setPlayer(newPlayer)
          }
        });
      };
    }

  }, [])




  return (
    <div
      style={{
        height: 'full',
        width: '770px',
        minWidth: '770px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex: 2,
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '29%'
        }}
      >
      </div>

      {/* Center */}
      <div
        style={{
          height: '100%',
          width: '42%',
          display: 'flex',
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            height: '60%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '5px'
          }}
        >
          <HiForward
            style={{
              color: 'white',
              transform: 'scaleX(-1)',
              fontSize: '24px',
              alignSelf: 'center',
            }}
          />
          <PlayIcon
            style={{
              color: 'white',
              padding: '2px 19px 0px 19px',
            }}
            onClick={() =>  player.togglePlay() }
          />
          <HiForward
            style={{
              color: 'white',
              fontSize: '24px',
              alignSelf: 'center',
            }}
            onClick={() => console.log(player.name)}
          />
        </div>
      </div>
      <div
        onClick={() => {
          dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'QueueView' })
        }}
        style={{
          height: '100%',
          width: '29%',
          display: 'flex',
          justifyContent: 'right',
          color: 'white',
          paddingRight: '26px',
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: '30px',
          paddingTop: '12px',
          cursor: 'pointer'
        }}
      >
        <HiOutlineQueueList />
      </div>
    </div>
  )
}

export default Lowbar