import React, { useState, useEffect }  from 'react'
import { useDataContext } from '../hooks/useDataContext';
import { PlayIcon, ChevronRightIcon, ChevronLeftIcon, QueueListIcon } from '@heroicons/react/solid'

import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { HiOutlineQueueList, HiForward } from "react-icons/hi2";

function Lowbar() {
  const { dispatch, accessToken } = useDataContext()
  const [ player, setPlayer ] = useState(null)
  const [ count, setCount ] = useState(0)

  const initPlayer = () => {
    console.log('initPlayer')
    if (window.Spotify) {
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

      newPlayer.connect().then(success => {
        if (success) {
          console.log('The Web Playback SDK successfully connected to Spotify!');
          setPlayer(newPlayer)

        }
      });


    } else {
      console.log('!window.Spotify')
    }
  }


  useEffect(() => {

    if (player) {
      console.log('player exists, return')
      return
    }

    console.log('useEffect')

    if (!document.getElementById('spotify-player-script')) {

      console.log('!script')

      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;
      script.id = 'spotify-player-script';

      document.body.appendChild(script);
      console.log('appended:', script)

      script.onload = () => {
        console.log('script.onload')

        window.onSpotifyWebPlaybackSDKReady = () => {

          console.log('onSpotifyWebPlaybackSDKReady')

          if (player) {
            console.log('onload, player already exists', player)
            return
          }


          initPlayer()
          // console.log('afte')

        }
      }

    } else {
      if (player) {
        console.log('script && player')
        return
      }
      initPlayer()

    }


    return () => {
      if (player) {
        console.log('script && !player')
        player.disconnect();
        console.log('Player disconnected (maybe)')
        setPlayer(null)
      }
    };

  }, [accessToken]);


  useEffect(() => {
    if (player) {
      return
    }
    setCount(count+1)


  }, [player])


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
          color: 'white'
        }}
      >{player?.name}
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