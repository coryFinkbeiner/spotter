import React, { useState, useEffect }  from 'react'
import { useDataContext } from '../hooks/useDataContext';
import { PlayIcon, ChevronRightIcon, ChevronLeftIcon, QueueListIcon } from '@heroicons/react/solid'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { HiOutlineQueueList, HiForward } from "react-icons/hi2";
import axios from 'axios'
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6"
import { IoIosSkipForward } from "react-icons/io"
import { GoDotFill } from "react-icons/go"


function Lowbar() {
  const { dispatch, accessToken, nextTrack, user } = useDataContext()
  const [ player, setPlayer ] = useState(null)
  const [ currentSong, setCurrentSong ] = useState(null)
  const [ count, setCount ] = useState(0)
  const [ deviceId, setDeviceId ] = useState(null)
  const [ isPaused, setIsPaused ] = useState(true)
  const [ previousID, setPreviousID ] = useState(null)
  const [ currentID, setCurrentID ] = useState(null)

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);
    window.onSpotifyWebPlaybackSDKReady = () => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      const letter = chars[Math.floor(Math.random() * chars.length)]
      const newPlayer = new window.Spotify.Player({
        name: letter,
        getOAuthToken: cb => { cb(accessToken) },
        // volume: 0
      });
      console.log(letter)
      newPlayer.addListener('ready', ({device_id}) => {
        setDeviceId(device_id
        dispatch({ type: 'SET_DEVICE_ID', payload: device_id })
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
        paused
      }) => {
        setIsPaused(paused)
      });

      newPlayer.addListener('player_state_changed', ({
        track_window: { current_track: { id } },
      }) => {
        if (!id) return
        if (!currentID) {
          setCurrentID(id)
          return
        }
        if (id === currentID) return
        setCurrentID(id)
      });




    }

    return () => {
      if (player) {
        player.disconnect();
        setPlayer(null)
      }
    };
  }, []);

  useEffect(() => {
    if (!currentID) return
    player.getCurrentState().then( state => {
      if (!state) return
      if (currentID !== state.track_window.current_track.id) console.log('id error')
      setCurrentSong(state.track_window.current_track)
    });
  }, [ currentID ])

  // post to tracks and listening_history
  useEffect(() => {
    if (!currentSong) return
    (async () => {
      try {
        const resTracks = await axios.post('http://localhost:3002/tracks', {
          spotify_id: currentID,
          response: currentSong,
        });
        const resHistory = await axios.post('http://localhost:3002/listening_history', {
          spotify_id_ref: currentID,
          user_id: user.id,
        });
      } catch (error) {
        console.error('tracks or history post error:', error);
      }
    })()
  }, [ currentSong ])

  // homemade listener, "are you less than two seconds from finishing?"
  useEffect(() => {
    if (!player) return

    function checkTimeLeft() {
      player.getCurrentState().then((state) => {
        if (!state) return
        const timeLeft = state.duration - state.position
        if (timeLeft < 2000) {
          setCount(Math.floor(Math.random() * 5000) + 1)
        }
      });
      setTimeout(checkTimeLeft, 1999);
    }
    checkTimeLeft()
  }, [ player ])

  // Spotify Queue Post, triggered by Count dependency
  useEffect(() => {
    if (!nextTrack) {
      return
    }

    (async () => {
      try {
        const response = await axios.post(
          'https://api.spotify.com/v1/me/player/queue',
          deviceId,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            params: {
              uri: nextTrack.uri,
            },
          }
        );
        dispatch({ type: 'SHIFT_QUEUE' });
      } catch (error) {
        console.log('queue Error:', error);
      }
    })();
  }, [ count ]);

  return (
    <div
      style={{
        height: 'full',
        width: '770px',
        minWidth: '770px',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '50%',
          marginTop: '6px',
          display: 'flex',
          flex: 'row',
        }}
      >
        <img
          src={currentSong?.album.images[0].url}
          style={{
            borderRadius: '5px',
            margin: '2px',
            height: '90%'
          }}
        />
        <div
          style={{
            marginLeft: '12px',
            marginTop: '10px'
          }}
        >
          <div
            style={{
              color: 'white',
              fontWeight: 'bold',

            }}
          >{currentSong?.name}</div>
          <div
            style={{
              color: '#f5f5f5',
              fontSize: '14px'
            }}
          >{currentSong?.artists[0].name}</div>
        </div>
      </div>
      <div
        style={{
          height: '100%',
          width: '20%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: 'row',
            color: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '18px',

          }}
        >
          {isPaused ?
            <FaCirclePlay
            style={{
              height: '40px',
              width: '40px',
              cursor: 'pointer',
            }}
            onClick={() => {
              player.togglePlay()
            }}
          /> :
          <FaCirclePause
            style={{
              height: '40px',
              width: '40px',
              cursor: 'pointer',
            }}
            onClick={() => {
              player.togglePlay()
            }}
          />}

          <IoIosSkipForward
            style={{
              height: '30px',
              width: '30px',
              marginLeft: '16px',
              cursor: 'pointer',
            }}
            onClick={() => {

              (async () => {
                try {
                  const response = await axios.post(
                    'https://api.spotify.com/v1/me/player/queue',
                    deviceId,
                    {
                      headers: {
                        Authorization: `Bearer ${accessToken}`,
                      },
                      params: {
                        uri: nextTrack.uri,
                      },
                    }
                  );
                  dispatch({ type: 'SHIFT_QUEUE' });
                  player.nextTrack()
                } catch (error) {
                  console.log('queue Error:', error);
                }
              })();
            }}
          />
        </div>
      </div>

      <div
        style={{
          width: '32%',
          height: '100%',
          display: 'flex',
          flex: 'row',
          alignItems: 'center',
          paddingTop: '7px'
        }}
      >
        <div
          style={{
            borderRadius: '50%',
            width: '66px',
            height: '66px',
            backgroundColor: 'red',
            marginRight: '10px',
            marginLeft: '8px',
            cursor: 'pointer',
          }}
          onClick={() => {
            dispatch({ type: 'VIEW_IN_CONSOLE', payload: 'red'})
            dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'SpotView' })
          }}
        ></div>
        <div
          style={{
            borderRadius: '50%',
            width: '66px',
            height: '66px',
            backgroundColor: 'yellow',
            marginRight: '10px',
            cursor: 'pointer',
          }}
          onClick={() => {
            dispatch({ type: 'VIEW_IN_CONSOLE', payload: 'yellow'})
            dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'SpotView' })
          }}
        ></div>
        <div
          style={{
            borderRadius: '50%',
            width: '66px',
            height: '66px',
            backgroundColor: 'blue',
            // marginRight: '6px',
            cursor: 'pointer',
          }}
          onClick={() => {
            dispatch({ type: 'VIEW_IN_CONSOLE', payload: 'blue'})
            dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'SpotView' })
          }}
        ></div>
      </div>
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '10%',
          color: 'white',
          justifyContent: 'center',
          paddingTop: '4px'
        }}
      >
        <HiOutlineQueueList
           style={{
            height: '40px',
            width: '40px',
            marginTop: '14px',
            cursor: 'pointer',
            marginLeft: '27px'
          }}
          onClick={() => {
            dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'QueueView' })
          }}
        />
      </div>
    </div>
  )
}

export default Lowbar