import React, { useState, useEffect }  from 'react'
import { useDataContext } from '../hooks/useDataContext';
import { PlayIcon, ChevronRightIcon, ChevronLeftIcon, QueueListIcon } from '@heroicons/react/solid'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { HiOutlineQueueList, HiForward } from "react-icons/hi2";
import axios from 'axios'


function Lowbar() {

  const { dispatch, accessToken, nextTrack, user } = useDataContext()

  const [ player, setPlayer ] = useState(null)

  const [ currentSong, setCurrentSong ] = useState(null)
  const [ count, setCount ] = useState(0)

  // const [ playbackState, setPlaybackState ] = useState(null)

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
        console.log('listening_history post response:', resHistory);
        console.log('tracks post response:', resTracks);
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
        console.log({ response });
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



              (async () => {
                try {
                  const res = await axios.post('http://localhost:3002/listening_history', {

                    spotify_id_ref: currentSong.id,
                    response: currentSong,

                  });
                  console.log('listening_history post response:', res);

                } catch (error) {
                  console.error('listening_history post error:', error);
                }
              })()

            }}
          />
            {currentSong && currentSong.name}
          <div
            onClick={() => {
              player.togglePlay()
            }}
            style={{
              color: 'white'
            }}
          >
          { isPaused ? <div>PLAY</div> : <div>PAUSE</div> }
          </div>
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