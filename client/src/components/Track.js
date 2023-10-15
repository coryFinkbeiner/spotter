import React, {useState} from 'react'
import { useDataContext } from '../hooks/useDataContext';
import { BsFillPlayFill } from "react-icons/bs"
import axios from 'axios'

function Track({
  index,
  image,
  trackName,
  artistName,
  albumName,
  duration_ms,
  uri,
  trackObject,
}) {
  const { accessToken, dispatch, device_id } = useDataContext()
  const [isHovering, setIsHovering] = useState(false);

  const TrackContainer = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    cursor: 'pointer',
    borderRadius: '5px',
    backgroundColor: isHovering ? 'rgb(40, 40, 40)' : 'transparent',
  };

  const circleStyle = {
    position: 'absolute',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    opacity: 0.2,
    transform: 'translate(-50%, -50%)',
  };

  const redCircle = { ...circleStyle, backgroundColor: 'red', top: '50%', left: '51.2%' };
  const yellowCircle = { ...circleStyle, backgroundColor: 'yellow', top: '50%', left: '65.5%' };
  const blueCircle = { ...circleStyle, backgroundColor: 'blue', top: '50%', left: '79.8%' };

  return (
    <div
      style={TrackContainer}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && (
        <>
          <div
            style={redCircle}
            onClick={() => {
              dispatch({
                type: 'ADD_TO_RED',
                payload: {
                  index,
                  image,
                  trackName,
                  artistName,
                  albumName,
                  duration_ms,
                  uri,
                  trackObject,
                }
              });
            }}
          ></div>
          <div
            style={yellowCircle}
            onClick={() => {
              dispatch({
                type: 'ADD_TO_YELLOW',
                payload: {
                  index,
                  image,
                  trackName,
                  artistName,
                  albumName,
                  duration_ms,
                  uri,
                  trackObject,
                }
              });
            }}
          ></div>
          <div
            style={blueCircle}
            onClick={() => {
              dispatch({
                type: 'ADD_TO_BLUE',
                payload: {
                  index,
                  image,
                  trackName,
                  artistName,
                  albumName,
                  duration_ms,
                  uri,
                  trackObject,
                }
              });
            }}
          ></div>
        </>
      )}
      <div
        style={{
          padding: '15px',
          color: 'grey',
        }}
      >
        {isHovering ?
          <BsFillPlayFill
            style={{
              color: 'white',
              fontSize: '20px'
            }}
            onClick={() => {
              (async () => {
                try {
                  const response = await axios.put(
                    'https://api.spotify.com/v1/me/player/play',
                    {
                      uris: [uri],
                      device_id: device_id,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${accessToken}`,
                      }
                    }
                  );
                } catch (error) {
                  console.log('Play Error:', error);
                }
              })();
            }}
          />
        : index + 1
        }
      </div>
      <img
        src={image}
        style={{
          height: '44px',
          margin: '2px',
        }}
      />
      <div
        style={{
          width: '225px'
        }}
      >
        <div
          style={{
            color: 'white',
            paddingRight: '15px',
            paddingLeft: '15px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {trackName}
        </div>
        <div
          style={{
            color: 'grey',
            paddingRight: '15px',
            paddingLeft: '15px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: '13px'
          }}
        >
          {artistName}
        </div>
      </div>
      <div
        style={{
          color: 'grey',
          paddingRight: '15px',
          paddingLeft: '15px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize: '13px',
          width: '160px'

        }}
      >
        {albumName}
      </div>
      <div
        style={{
          color: 'grey',
          fontSize: '13px',
        }}
      >
        3:30
      </div>
    </div>
  )
}

export default Track