import React, { useState, useEffect }  from 'react'
import { useDataContext } from '../hooks/useDataContext';
import { PlayIcon, ChevronRightIcon, ChevronLeftIcon, QueueListIcon } from '@heroicons/react/solid'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { HiOutlineQueueList, HiForward } from "react-icons/hi2";
import axios from 'axios'
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6"
import { IoIosSkipForward } from "react-icons/io"


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
        volume: 0
      });
      console.log(letter)
      newPlayer.addListener('ready', ({device_id}) => {
        setDeviceId(device_id)
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

        backgroundColor: 'pink'
      }}
    >
      <div
        style={{
          height: '100%',
          width: '40%',
          padding: '8px 10px 12px 12px',
          backgroundColor: 'lightblue',
          display: 'flex',
          flex: 'row'
        }}
      >
        <img
          src={currentSong?.album.images[0].url}
          style={{
            borderRadius: '5px',
            margin: '2px'
          }}
        />
        <div>
          <div>{currentSong?.name}</div>
          <div>{currentSong?.artists[0].name}</div>
        </div>
      </div>

      <div
        style={{
          height: '100%',
          width: '16%',
          backgroundColor: 'red'
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: 'row',
            color: 'white',
            justifyContent: 'center',
            height: '100%',
            alignItems: 'center',
            paddingBottom: '14px'
          }}
        >
          {isPaused ?
            <FaCirclePlay
            style={{
              height: '40px',
              width: '40px',
            }}
            onClick={() => {
              player.togglePlay()
            }}
          /> :
          <FaCirclePause
            style={{
              height: '40px',
              width: '40px',
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
          backgroundColor: 'purple',
          width: '32%',
          height: '100%',
        }}
      >
        Spots
      </div>

      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '12%',
          backgroundColor: 'orange',
          color: 'white',
          justifyContent: 'center',
          // paddingTop: '17px',

        }}
      >
        <HiOutlineQueueList
           style={{
            height: '61%',
            width: '61%',
            paddingTop: '8px',
            paddingLeft: '15px',
            cursor: 'pointer',
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