import React, { useState, useEffect }  from 'react'
import { useDataContext } from '../hooks/useDataContext';
import { PlayIcon, ChevronRightIcon, ChevronLeftIcon, QueueListIcon } from '@heroicons/react/solid'

import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { HiOutlineQueueList, HiForward } from "react-icons/hi2";

import Album from './Album'


function Lowbar() {
  const { dispatch, accessToken } = useDataContext()
  const [ player, setPlayer ] = useState(null)
  const [ count, setCount ] = useState(0)



  useEffect(() => {

    if (player){
      console.log('player already exists')
      return
    }

    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {

      const newPlayer = new window.Spotify.Player({
        name: 'Spotter SDK',
        getOAuthToken: cb => { cb(accessToken) },
        volume: 0.5
      });

      newPlayer.addListener('ready', ({ device_id }) => {
          console.log('Ready with Device ID', device_id);
      });

      newPlayer.addListener('not_ready', ({ device_id }) => {
          console.log('Device ID has gone offline', device_id);
      });

      newPlayer.connect().then(success => {
        if (success) {
          console.log('The Web Playback SDK successfully connected to Spotify!');
          setPlayer(newPlayer)
        }
      });

      newPlayer.addListener('player_state_changed', ({
        position,
        duration,
        track_window: { current_track }
      }) => {
        console.log('Currently Playing', current_track);
        console.log('Position in Song', position);
        console.log('Duration of Song', duration);
      });
    }

    return () => {
      if (player) {
        player.disconnect();
        setPlayer(null)
      }
    };

  }, []);


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
          width: '29%',
          color: 'white'
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
          color: 'white'
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
            onClick={() => {
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
            onClick={() => {
              player.getCurrentState().then( state => {
                console.log({state})
              });
            }}
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