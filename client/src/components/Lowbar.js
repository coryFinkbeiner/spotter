import React, { useState, useEffect }  from 'react'
import { useDataContext } from '../hooks/useDataContext';
import { PlayIcon, ChevronRightIcon, ChevronLeftIcon, QueueListIcon } from '@heroicons/react/solid'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { HiOutlineQueueList, HiForward } from "react-icons/hi2";
import axios from 'axios'


function Lowbar() {

  const { dispatch, accessToken, nextTrack } = useDataContext()

  const [ player, setPlayer ] = useState(null)
  const [ queueTimer, setQueueTimer ] = useState(null)
  const [ currentSong, setCurrentSong ] = useState(null)
  const [ count, setCount ] = useState(0)



  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);
    window.onSpotifyWebPlaybackSDKReady = () => {
      const newPlayer = new window.Spotify.Player({
        name: 'Spotter SDK',
        getOAuthToken: cb => { cb(accessToken) },
        volume: 0
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



      // newPlayer.addListener('player_state_changed', ({
      //   track_window: { current_track }
      // }) => {
      //   setCurrentSong(current_track)
      // });

      // newPlayer.addListener('player_state_changed', ({
      //   duration,
      //   position,
      //   track_window: { current_track }
      // }) => {
      //   clearTimeout(queueTimer)
      //   const timeLeft = duration - position
      //   const newQueueTimer = setTimeout(() => {
      //     setCount(count + 1)
      //   }, timeLeft - 3000 )
      //   setQueueTimer(newQueueTimer)
      // });



    }

    return () => {
      if (player) {
        player.disconnect();
        setPlayer(null)
      }
    };
  }, []);

  // useEffect(() => {
  //   setNextSong(myQueue[0])
  // }, [ myQueue ])

  useEffect(() => {
    if (!nextTrack) return

    async function POSTtoSpotifyQueue() {
      try {
        const response = await axios.post(
          'https://api.spotify.com/v1/me/player/queue',
          null,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            params: {
              uri: nextTrack.uri,
            },
          }
        );
        dispatch({ type: 'SHIFT_QUEUE' })
      } catch (error) {
        console.log('queue Error:', error);
      }
    }
    // POSTtoSpotifyQueue()

  }, [ count ]);

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
              dispatch({ type: 'SHIFT_QUEUE' })
            }}
          />
            {currentSong && currentSong.name}
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